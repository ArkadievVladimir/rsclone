import { TweetsApi } from "./tweetsApi";
import { axios } from '../../core/axios';
jest.mock('axios')

describe('TweetsApi', () => {
    let tweets = [
        {
            images: [],
            _id: "600aaa8faf97373facd1746a",
            text: "Menu test",
            user: {
                confirmed: false,
                tweets: [],
                _id: "60057b123f01ef1f38a980c8",
                email: "vzabavsk23@mail.ru",
                username: "VZab",
                fullname: "Vitaly Zabavski",
                createdAt: "2021-01-18T12:12:02.098Z",
                updatedAt: "2021-01-18T12:12:02.098Z",
                __v: 0
            },
            createdAt: "2021-01-22T10:35:59.462Z",
            updatedAt: "2021-01-22T11:26:44.092Z",
            __v: 0
        },
        {
            images: [],
            _id: "6006bc796ed2961aa0191cf4",
            text: "Closing test ",
            user: {
                confirmed: false,
                tweets: [],
                _id: "60059a137b63aa3740261fe5",
                email: "123456789@mail.com",
                username: "John_Doe",
                fullname: "John Doe",
                createdAt: "2021-01-18T14:24:19.522Z",
                updatedAt: "2021-01-18T14:24:19.522Z",
                __v: 0
            },
            createdAt: "2021-01-19T11:03:21.152Z",
            updatedAt: "2021-01-22T08:41:09.192Z",
            __v: 0
        }
    ]
    const data = {
        data: tweets
    }
    let response = {
        data: data,
    }

    test('should fetch tweets', async () => {
        axios.get.mockReturnValue(response)

        const data = await TweetsApi.fetchTweets()
        expect(data).toEqual(tweets)
    })

    test('should add tweet', async () => {
        axios.post.mockReturnValue(response)

        const data = await TweetsApi.addTweet({text: 'unit-test'})
        expect(data).toEqual(tweets)
    })

    test('should edit tweet', async () => {
        axios.get.mockReturnValue(response)
        axios.patch.mockReturnValue(response)

        const data = await TweetsApi.editTweet({text: 'unit-test', id: 0})
        expect(data).toEqual(tweets)
    })
})