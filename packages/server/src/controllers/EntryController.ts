import { Context } from 'koa'
import mongoose from 'mongoose'
import { EntryType } from 'perf_hooks'
import entrySchema from '../models/Entry'

const Entry = mongoose.model('Entry', entrySchema)

interface NewEntryInput {
  amount: number;
  type: EntryType
}

export default {
  async createOne({ input }: { input: NewEntryInput }, context: Context) {
    const entry = new Entry({ ...input, userId: context.state.userId });
    console.log({ entry })
    return entry.save();
  }
}
