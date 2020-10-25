import { AuthenticationError } from 'apollo-server-koa'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import userSchema, { UserDocument } from '../models/User'
import bcrypt from 'bcrypt'
import { Context } from 'koa'

const User = mongoose.model<UserDocument>('User', userSchema)

const validatePassword = async (providedPassword: string, userPassword: string) => {

  return bcrypt.compare(providedPassword, userPassword)
}

const signToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.APP_SECRET || '', { expiresIn: '2 days' })
}

export default {
  async login(email: string, password: string, context: Context) {
    const user: UserDocument | null = await User.findOne({ email }, 'password email, _id')
    if (!user) {
      throw new AuthenticationError('Wrong credentials. Check email or password')
    }

    if (!(await validatePassword(password, user?.password))) {
      throw new AuthenticationError('Wrong credentials. Check email or password')
    }

    context.cookies.set('token', signToken(user?.id), { httpOnly: true })

    return {
      success: true,
    }
  }
}
