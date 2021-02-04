import { tweetReducer } from './reducer';
import { setTweetLoadingStatus, setTweetData } from './actionCreators';
import { LoadingStatus } from '../../types';

describe('tweetReducer', () => {
    const initialState = {
        data: undefined,
        LoadingStatus: LoadingStatus.NEVER
    };
    const testValue = {
        data: {
            images: [],
            _id: '6006bc796ed2961aa0191cf4',
            text: 'Closing test ',
            user: {
                confirmed: false,
                tweets: [],
                _id: '60059a137b63aa3740261fe5',
                email: '123456789@mail.com',
                username: 'John_Doe',
                fullname: 'John Doe',
                createdAt: '2021-01-18T14:24:19.522Z',
                updatedAt: '2021-01-18T14:24:19.522Z',
                __v: 0
            },
            createdAt: '2021-01-19T11:03:21.152Z',
            updatedAt: '2021-01-22T08:41:09.192Z',
            __v: 0
        },
        LoadingStatus: LoadingStatus.SUCCESS
    };

    test('should set LoadingStatus correctly', () => {
        let action = setTweetLoadingStatus(LoadingStatus.SUCCESS);
        let newState = tweetReducer(initialState, action);
        expect(newState.LoadingStatus).toEqual(LoadingStatus.SUCCESS);
    });
    
    test('should set tweet data correctly', () => {
        let action = setTweetData(testValue['data']);
        let newState = tweetReducer(initialState, action);
        expect(newState['data']).toEqual(testValue['data']);
    });
});
