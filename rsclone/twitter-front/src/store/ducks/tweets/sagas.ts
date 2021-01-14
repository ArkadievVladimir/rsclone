import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingStatus } from '../../types';
import { AddTweet, setAddFormState, setTweets, setTweetsLoadingStatus } from './actionCreators';
import { FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

 
export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, payload);
        yield put(AddTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}
   
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
