import React from 'react';
import { LoadingStatus } from '../../../types';


export interface User {
    id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed?: boolean;
  confirmed_hash: string;
  about?: string;
  website?: string;
  location?: string;
}

export interface UserState {
    data: User | undefined;
    status: LoadingStatus;
}