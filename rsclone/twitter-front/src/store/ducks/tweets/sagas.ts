import { call, put, takeLatest } from 'redux-saga/effects';
import { AddTweet, setAddFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import axios from 'axios';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState, LoadingState, Tweet } from './contracts/state';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';

 
export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullName: 'User',
                userName: 'test',
                avatarUrl: './'
            }
        };
        const item = yield call(TweetsApi.addTweet, data);
        yield put(AddTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}
   
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
