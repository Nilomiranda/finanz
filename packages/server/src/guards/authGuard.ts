import { Context } from "koa";

import jwt from 'jsonwebtoken'
import { AuthenticationError } from "apollo-server-koa";

export const authGuard = (ctx: Context) => {
  const token = ctx.cookies.get('token')
  if (!token) {
    throw new AuthenticationError('You must login first')
  }

  try {
    const verifiedToken = jwt.verify(token, process.env.APP_SECRET || '')
    console.log({ verifiedToken })
    ctx.state.userId = (verifiedToken as Record<string, string | number>).userId
    return verifiedToken
  } catch (err) {
    throw new AuthenticationError('You must login first')
  }
}
