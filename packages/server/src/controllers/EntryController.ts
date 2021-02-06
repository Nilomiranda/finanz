import { Context } from 'koa'
import mongoose from 'mongoose'
import entrySchema, { EntryType } from '../models/Entry'

const Entry = mongoose.model('Entry', entrySchema)

interface NewEntryInput {
  amount: number;
  type: EntryType
}

export default {
  async createOne({ input }: { input: NewEntryInput }, context: Context) {
    const signedAmount = input.type === EntryType.INCOME ? input.amount : input.amount * -1
    const entry = new Entry({ ...input, amount: signedAmount, userId: context.state.userId });
    return entry.save();
  }
}
