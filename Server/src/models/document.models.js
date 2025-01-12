import mongoose, { Schema } from 'mongoose'

const documentSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export const Document = mongoose.model('Document', documentSchema)
