import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';
import { setTweetData, setTweetLoadingState } from './actionCreators'; 
import { FetchTweetDataActionInterface, TweetActionsType} from './contracts/actionTypes'
import { LoadingState } from './contracts/state';


export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}
   
export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
