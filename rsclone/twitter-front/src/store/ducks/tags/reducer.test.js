import { TagsReducer } from './reducer';
import { setTagsLoadingStatus, fetchTags, setTags } from '../tags/actionCreators';
import { LoadingStatus } from '../../types';

describe('TagsReducer', () => {
    const initialState = {
        items: [],
        LoadingStatus: LoadingStatus.NEVER
    };

    const testValue = {
        items: ['#test', '#unit-test'],
        LoadingStatus: LoadingStatus.LOADED
    };

    test('should set LoadingStatus correctly', () => {
        const action = setTagsLoadingStatus(LoadingStatus.SUCCESS);
        const newState = TagsReducer(initialState, action);
        expect(newState.LoadingStatus).toEqual(LoadingStatus.SUCCESS);
    });

    test('should fetch tags correctly', () => {
        const action = fetchTags();
        const newState = TagsReducer(initialState, action);
        expect(newState.items.length).toBe(0);
        expect(newState.LoadingStatus).toEqual(LoadingStatus.LOADING);
    });

    test('should set tags data correctly', () => {
        const action = setTags(testValue.items);
        const newState = TagsReducer(initialState, action);
        expect(newState.items.length).toEqual(testValue.items.length);
        expect(newState.items).toContain('#test');
        expect(newState.items).toContain('#unit-test');
        expect(newState.LoadingStatus).toEqual(LoadingStatus.LOADED);
    });
});
