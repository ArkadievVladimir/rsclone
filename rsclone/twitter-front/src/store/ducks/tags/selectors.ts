import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingStatus } from '../../types';
import { TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;
  
export const selectTagsLoadingStatus = (state: RootState): LoadingStatus => selectTags(state).LoadingStatus;

export const selectIsTagsLoading = (state: RootState): boolean => selectTagsLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTagsLoaded = (state: RootState): boolean => selectTagsLoadingStatus(state) === LoadingStatus.LOADING;

export const selectTagsItems = createSelector(selectTags, (tweets) => tweets.items);
