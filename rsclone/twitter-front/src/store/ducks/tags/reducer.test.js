import { TagsReducer } from "./reducer";
import { setTagsLoadingStatus, fetchTags, setTags } from "../tags/actionCreators";
import { LoadingStatus } from "../../types";

describe('TagsReducer', () => {
    const initialState = {
        items: [],
        LoadingStatus: LoadingStatus.NEVER
    }

    const testValue = {
        items: ['#test', '#unit-test'],
        LoadingStatus: LoadingStatus.LOADED
    }

    test('should set LoadingStatus correctly', () => {
        let action = setTagsLoadingStatus(LoadingStatus.SUCCESS)
        let newState = TagsReducer(initialState, action)
        expect(newState.LoadingStatus).toEqual(LoadingStatus.SUCCESS)
    })

    test('should fetch tags correctly', () => {
        let action = fetchTags()
        let newState = TagsReducer(initialState, action)
        expect(newState.items.length).toBe(0)
        expect(newState.LoadingStatus).toEqual(LoadingStatus.LOADING)
    })

    test('should set tags data correctly', () => {
        let action = setTags(testValue.items)
        let newState = TagsReducer(initialState, action)
        expect(newState.items.length).toEqual(testValue.items.length)
        expect(newState.items).toContain('#test')
        expect(newState.items).toContain('#unit-test')
        expect(newState.LoadingStatus).toEqual(LoadingStatus.LOADED)
    })
})