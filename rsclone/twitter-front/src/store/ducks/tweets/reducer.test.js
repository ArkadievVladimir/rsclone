import { tweetsReducer } from './reducer';
import { AddTweet, removeTweet, EditTweet, fetchTweets, setTweets, setTweetsLoadingStatus, setAddFormState } from '../tweets/actionCreators';
import { LoadingStatus } from '../../types';
import { AddFormState } from './contracts/state';

describe('tweetsReducer', () => {
    const initialState = {
        items: [{
            images: [],
            _id: '600aaa8faf97373facd1746a',
            text: 'Menu test',
            user: {
                confirmed: false,
                tweets: [],
                _id: '60057b123f01ef1f38a980c8',
                email: 'vzabavsk23@mail.ru',
                username: 'VZab',
                fullname: 'Vitaly Zabavski',
                createdAt: '2021-01-18T12:12:02.098Z',
                updatedAt: '2021-01-18T12:12:02.098Z',
                __v: 0
            },
            createdAt: '2021-01-22T10:35:59.462Z',
            updatedAt: '2021-01-22T11:26:44.092Z',
            __v: 0
        }],
        LoadingStatus: LoadingStatus.NEVER,
        addFormState: AddFormState.NEVER
    }
    let testValue = {
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
    };
    
    test('should increase tweets length after adding', () => {
        const action = AddTweet(testValue);
        const newState = tweetsReducer(initialState, action);
        expect(newState.items.length).toBe(2);
    });
    test('should add tweet correctly', () => {
        const action = AddTweet(testValue);
        const newState = tweetsReducer(initialState, action);
        expect(newState.items[0]).toEqual(testValue);
    });
    test('should remove tweet correctly', () => {
        const action = removeTweet('600aaa8faf97373facd1746a');
        const newState = tweetsReducer(initialState, action);
        expect(newState.items.length).toBe(0);
    });
    test('should edit tweet correctly', () => {
        const editiedTweet = {
            images: [],
            _id: '600aaa8faf97373facd1746a',
            text: 'Menu test edited',
            user: {
                confirmed: false,
                tweets: [],
                _id: '60057b123f01ef1f38a980c8',
                email: 'vzabavsk23@mail.ru',
                username: 'VZab',
                fullname: 'Vitaly Zabavski',
                createdAt: '2021-01-18T12:12:02.098Z',
                updatedAt: '2021-01-18T12:12:02.098Z',
                __v: 0
            },
            createdAt: '2021-01-22T10:35:59.462Z',
            updatedAt: '2021-01-22T11:26:44.092Z',
            __v: 0
        }
        const action = EditTweet(editiedTweet);
        const newState = tweetsReducer(initialState, action);
        expect(newState.items[0]).toEqual(editiedTweet);
    });
    test('should fetch tweets correctly', () => {
        const action = fetchTweets();
        const newState = tweetsReducer(initialState, action);
        expect(newState.items.length).toBe(0);
        expect(newState['LoadingStatus']).toEqual(LoadingStatus.LOADING);
    });
    test('should return correct tweets array', () => {
        const actionState = {
            items: [{
                images: [],
                _id: '600aaa8faf97373facd1746a',
                text: 'Menu test',
                user: {
                    confirmed: false,
                    tweets: [],
                    _id: '60057b123f01ef1f38a980c8',
                    email: 'vzabavsk23@mail.ru',
                    username: 'VZab',
                    fullname: 'Vitaly Zabavski',
                    createdAt: '2021-01-18T12:12:02.098Z',
                    updatedAt: '2021-01-18T12:12:02.098Z',
                    __v: 0
                },
                createdAt: '2021-01-22T10:35:59.462Z',
                updatedAt: '2021-01-22T11:26:44.092Z',
                __v: 0
            },{
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
            }],
            LoadingStatus: LoadingStatus.NEVER
        }
        const action = setTweets(actionState['items']);
        const newState = tweetsReducer(initialState, action);
        expect(newState.items.length).toBe(actionState.items.length);
        expect(newState.items).toEqual(actionState.items);
    });
    test('should set LoadingStatus correctly', () => {
        const action = setTweetsLoadingStatus(LoadingStatus.SUCCESS);
        const newState = tweetsReducer(initialState, action);
        expect(newState['LoadingStatus']).toEqual(LoadingStatus.SUCCESS);
    });
    test('should set addFormState correctly', () => {
        const action = setAddFormState(AddFormState.LOADING);
        const newState = tweetsReducer(initialState, action);
        expect(newState['addFormState']).toEqual(AddFormState.LOADING);
    });
});
