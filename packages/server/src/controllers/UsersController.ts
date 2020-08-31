import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

export default {
  async getUser(userId: any) {
    const user = await User.findById(userId);
    return user;
  },

  async getUsers() {
    return User.find();
  },

  async createOne({
    input,
  }: {
    input: { email: string; name: string; password: string };
  }) {
    const user = new User(input);
    return user.save();
  },
};
