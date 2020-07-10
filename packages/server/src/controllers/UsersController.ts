import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

export default {
  async getUser(userId: any) {
    const user = await User.findById(userId);
    return user;
  },

  async createOne(userPayload: {
    name: string;
    email: string;
    password: string;
  }) {
    const user = new User(userPayload);
    return user.save();
  },
};
