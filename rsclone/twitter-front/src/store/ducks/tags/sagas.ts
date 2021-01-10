import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LoadingState } from './contracts/state';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';
import { TagsApi } from '../../../services/api/TagsApi';

 
export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }
}
   

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
