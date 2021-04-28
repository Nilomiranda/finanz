import { Context } from 'koa';
import mongoose, { Mongoose, Schema, Types } from 'mongoose';
import entrySchema, { EntryType } from '../models/Entry';

const Entry = mongoose.model('Entry', entrySchema);

interface NewEntryInput {
  amount: number;
  type: EntryType;
}

export interface EntryFilters {
  userId?: string;
  createdDate?: {
    start?: string;
    end?: string;
  };
}

export default {
  async createOne({ input }: { input: NewEntryInput }, context: Context) {
    const signedAmount =
      input.type === EntryType.INCOME ? input.amount : input.amount * -1;
    const entry = new Entry({
      ...input,
      amount: signedAmount,
      userId: context.state.userId,
    });
    return entry.save();
  },

  async getEntries(filters: EntryFilters = {}) {
    const { userId, createdDate } = filters;
    const filterObject: Types.ObjectId | Record<string, any> = {};

    if (userId) {
      Object.assign(filterObject, { userId });
    }

    if (createdDate) {
      const { start, end } = createdDate;
      const dateFilters = {};

      if (start) {
        Object.assign(dateFilters, { $gte: new Date(start) });
      }

      if (end) {
        Object.assign(dateFilters, { $lte: new Date(end) });
      }

      Object.assign(filterObject, { createdAt: dateFilters });
    }

    return Entry.find(filterObject);
  },

  async getEntry(id: string) {
    return Entry.findById(id);
  },
};
