import React from 'react';
import { combineReducers } from 'redux';
import { tweetReducer } from './ducks/tweet/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { TagsReducer } from './ducks/tags/reducer';


export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: TagsReducer,
    tweet: tweetReducer
});
