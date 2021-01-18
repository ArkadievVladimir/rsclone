import { call, put, takeLatest } from 'redux-saga/effects';
import { setTags, setTagsLoadingStatus, TagsActionsType } from './actionCreators';
import { TagsApi } from '../../../services/api/TagsApi';
import { LoadingStatus } from '../../types';

 
export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
    }
}
   

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
