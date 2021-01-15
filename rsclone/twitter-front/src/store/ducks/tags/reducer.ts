import React from 'react';
import produce from 'immer';
import { Draft } from 'immer';
import { TagsState } from './contracts/state';
import { TagsActions, TagsActionsType } from './actionCreators';
import { LoadingStatus } from '../../types';

const initialTagsState: TagsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER
}

export const TagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;

        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.LoadingStatus = LoadingStatus.LOADING;
            break;

        case TagsActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload;
            break;

        default:
            break;
    }
}, initialTagsState);
