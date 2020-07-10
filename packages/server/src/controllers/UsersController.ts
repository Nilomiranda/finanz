import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

export default {
  async getUser(userId: any) {
    const user = await User.findById(userId);
    console.log('found user -> ', user);

    return user;
  },
};
