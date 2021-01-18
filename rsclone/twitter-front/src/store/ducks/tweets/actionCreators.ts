import { LoadingStatus } from '../../types';
import { SetTweetsActionInterface, FetchAddTweetActionInterface, AddTweetActionInterface, FetchTweetsActionInterface, SetTweetsLoadingStatusInterface, SetAddFormStateInterface, TweetsActionsType, RemoveTweetActionInterface, EditTweetActionInterface, FetchEditTweetActionInterface } from './contracts/actionTypes';
import { AddFormState, Tweet, TweetsState } from './contracts/state';

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
});

export const fetchAddTweet = (payload: {text: string, images: string[]}): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload 
});

export const AddTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
});

export const fetchEditTweet = (payload: {text: string, id: string}): FetchEditTweetActionInterface => ({
    type: TweetsActionsType.FETCH_EDIT_TWEET,
    payload
});

export const EditTweet = (payload: Tweet): EditTweetActionInterface => ({
    type: TweetsActionsType.EDIT_TWEET,
    payload
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
});

export const setTweetsLoadingStatus = (payload: LoadingStatus): SetTweetsLoadingStatusInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
});

export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload
});
 

export type  TweetsActions = RemoveTweetActionInterface
    | SetTweetsActionInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | FetchTweetsActionInterface
    | SetTweetsLoadingStatusInterface
    | SetAddFormStateInterface
    | EditTweetActionInterface
    ;