import { axios } from '../../core/axios';
import { Tweet } from '../../store/ducks/tweets/contracts/state';
import { BACKEND_URL } from '../backendUrl';

interface Response<T> {
    status: string;
    data: T;
}

export const TweetsApi = {
    async fetchTweets(userId?: string): Promise<Tweet[]> {
        const { data } = await axios.get<Response<Tweet[]>>(userId ? `${BACKEND_URL}/tweets/user/${userId}` : `${BACKEND_URL}/tweets`);
        return data.data;
    },
    async fetchTweetData(id: string): Promise<Tweet> {
        const { data } = await axios.get<Response<Tweet>>(`${BACKEND_URL}/tweets/` + id);
        return data.data;
    },
    async addTweet(payload: {
        text: string,
        images: string[]
    }): Promise<Tweet> {
        const { data } = await axios.post<Response<Tweet>>(`${BACKEND_URL}/tweets`, payload);
        return data.data;
    },
    async updateLike(payload: {
        userId: string,
        id: string
    }): Promise<Tweet> {
        const { userId, id } = payload
        const { data } = await axios.get<Response<Tweet>>(`${BACKEND_URL}/tweets/${id}`);
        const likedTweetIndex = data.data.like.indexOf(userId);
        if (likedTweetIndex === -1) {
            data.data.like.push(userId);
        } else {
            data.data.like.splice(likedTweetIndex, 1);
        }
        axios.patch<Response<Tweet>>(`${BACKEND_URL}/like/${id}`, data.data);
        return data.data;
    },
    async getLikeCount(payload: {
        id: string,
    }): Promise<Tweet> {
        const { id } = payload
        const { data } = await axios.get<Response<Tweet>>(`${BACKEND_URL}/tweets/${id}`);
        return data.data;
    },
    async editTweet(payload: {
        text: string,
        id?: string
    }): Promise<Tweet> {
        const { text, id } = payload;
        const { data } = await axios.get<Response<Tweet>>(`${BACKEND_URL}/tweets/${id}`);
        data.data.text = text;
        axios.patch<Response<Tweet>>(`${BACKEND_URL}/tweets/${id}`, data.data);
        return data.data;
    },
    removeTweet: (id: string): Promise<void> => axios.delete(`${BACKEND_URL}/tweets/` + id)
};
 