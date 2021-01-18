import { model, Schema, Document } from 'mongoose';

export interface UserModelInterface {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmed_hash: string;
  about?: string;
  website?: string;
  location?: string;
  tweets?: string[];
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema<UserModelDocumentInterface>({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  location: {
    type: String
  },
  password: {
    required: true,
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmed_hash: {
    required: true,
    type: String,
  },
  about: {
    type: String
  },
  website: {
    type: String
  },
  tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
},
{
  timestamps: true,
});

UserSchema.set('toJSON', {
  transform: function(_: any, obj: { password: any; confirmed_hash: any; }) {
    delete obj.password;
    delete obj.confirmed_hash;
    return obj;
  }
});

export const UserModel = model<UserModelDocumentInterface>('User', UserSchema);
