import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema

export enum EntryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

const entrySchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: EntryType,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export interface EntryDocument extends Document {
  amount: number
  type: EntryType
  userId: string
}

export default entrySchema
