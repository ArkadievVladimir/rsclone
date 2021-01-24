import { LoadingStatus } from '../../../types';

export interface User {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmed_hash: string;
  likedTweets: [];
  about?: string;
  website?: string;
  location?: string;
  createdAt: string;
}

export interface UserState {
    data: User | undefined;
    status: LoadingStatus;
}
