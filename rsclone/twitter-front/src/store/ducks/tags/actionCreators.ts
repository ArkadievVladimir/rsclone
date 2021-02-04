import { Action } from 'redux';
import { LoadingStatus } from '../../types';
import { TagsState } from './contracts/state';

export enum TagsActionsType {
    SET_TAGS = 'hashtags/SET_TAGS',
    FETCH_TAGS = 'hashtags/FETCH_TAGS',
    SET_LOADING_STATE = 'hashtags/SET_LOADING_STATE',
};

export interface SetTagsItemsActionInterface extends Action<TagsActionsType>{
    type:  TagsActionsType.SET_TAGS;
    payload:  TagsState['items'];
};

export interface FetchTagsItemsActionInterface extends Action<TagsActionsType>{
    type:  TagsActionsType.FETCH_TAGS;
};

export interface SetTagsItemsLoadingStatusActionInterface extends Action<TagsActionsType>{
    type:  TagsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
};

export const setTags = (payload:  TagsState['items']): SetTagsItemsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
});

export const fetchTags = (): FetchTagsItemsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS
});

export const setTagsLoadingStatus = (payload: LoadingStatus): SetTagsItemsLoadingStatusActionInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
});

export type TagsActions = | SetTagsItemsActionInterface | SetTagsItemsLoadingStatusActionInterface | FetchTagsItemsActionInterface;
