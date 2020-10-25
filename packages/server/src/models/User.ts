// tslint:disable:only-arrow-functions
import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      select: false,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  // @ts-ignore
  this.password = await bcrypt.hash(this.password, 8);
});

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

export default userSchema;
