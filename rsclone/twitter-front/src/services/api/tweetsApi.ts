import { axios } from '../../core/axios';
import { Tweet } from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
    status: string;
    data: T;
}

export const TweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await axios.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
    async fetchTweetData(id: string): Promise<Tweet> {
        const { data } = await axios.get<Response<Tweet>>('/tweets/' + id);
        return data.data;
    },
    async addTweet(payload: {
        text: string,
        images: string[]
    }): Promise<Tweet> {
        const { data } = await axios.post<Response<Tweet>>('/tweets', payload);
        console.log('addTweet ', data)
        return data.data;
    },
    async editTweet(payload: {
        text: string,
        id?: string
    }): Promise<Tweet> {
        const {text, id} = payload
        const { data } = await axios.get<Response<Tweet>>(`/tweets/${id}`);
        data.data.text = text;
        axios.patch<Response<Tweet>>(`/tweets/${id}`, data.data);
        return data.data
    },
    removeTweet: (id: string): Promise<void> => axios.delete('/tweets/' + id)
}
 