import { model, Schema, Document } from 'mongoose';
import { UserModelInterface } from './UserModel';

export interface TweetModelInterface {
  _id?: string;
  text: string;
  like: string[];
  user: UserModelInterface;
  images?: string[];
}

export type TweetModelDocumentInterface = TweetModelInterface & Document;

const TweetSchema = new Schema<TweetModelDocumentInterface>({
  text: {
    required: true,
    type: String,
    maxLength: 280,
  },
  user: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  like: {
    type: [
      {type: String}
    ],
  },
  images: [
    {type: String}
  ],
},
{
  timestamps: true,
});

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema);
