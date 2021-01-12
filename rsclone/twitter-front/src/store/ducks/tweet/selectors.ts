import { RootState } from '../../store';
import { Tweet } from '../tweets/contracts/state';
import { TweetState } from './contracts/state';
import { LoadingStatus } from '../../types'

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectLoadingStatus = (state: RootState): LoadingStatus => 
  selectTweet(state).LoadingStatus;

export const selectIsTweetLoading = (state: RootState): boolean => 
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean => 
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetData= (state: RootState): Tweet | undefined => selectTweet(state).data;
