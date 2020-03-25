import * as mongoose from 'mongoose';

export const LanguageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
