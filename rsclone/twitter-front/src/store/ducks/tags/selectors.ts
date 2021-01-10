import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState} from './contracts/state';
import { TagsState } from './contracts/state';


export const selectTags = (state: RootState): TagsState => state.tags;
  
export const selectTagsLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState;

export const selectIsTagsLoading = (state: RootState): boolean => selectTagsLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: RootState): boolean => selectTagsLoadingState(state) === LoadingState.LOADING;


export const selectTagsItems = createSelector(selectTags, (tweets) => tweets.items);
