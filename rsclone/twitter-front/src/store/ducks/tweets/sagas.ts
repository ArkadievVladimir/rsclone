import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingStatus } from '../../types';
import { AddTweet, EditTweet, setAddFormState, setTweets, setTweetsLoadingStatus } from './actionCreators';
import { FetchAddTweetActionInterface, FetchEditTweetActionInterface, RemoveTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchTweetsRequest() {
    try {
        const pathname = window.location.pathname;
        const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
        const items = yield call(TweetsApi.fetchTweets, userId);
        yield put(setTweets(items));
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

export function* fetchEditTweetRequest({ payload }: FetchEditTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.editTweet, payload);
        yield put(EditTweet(item));
    } catch (error) {
        alert('Ошибка при редактировании!');
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchUpdateLike({ payload }: any) {
    try {
        const item = yield call(TweetsApi.updateLike, payload);
        yield put(EditTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchRemoveTweetRequest({ payload }: RemoveTweetActionInterface) {
    try {
        yield call(TweetsApi.removeTweet, payload);
    } catch (error) {
        alert('Ошибка при удалении!');
    }
}
   
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
    yield takeLatest(TweetsActionsType.FETCH_EDIT_TWEET, fetchEditTweetRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_LIKE, fetchUpdateLike);
}
