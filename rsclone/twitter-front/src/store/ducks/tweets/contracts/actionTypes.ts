import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { AddFormState, Tweet, TweetsState } from "./state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    FETCH_EDIT_TWEET = 'tweets/FETCH_EDIT_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    EDIT_TWEET = 'tweets/EDIT_TWEET',
    REMOVE_TWEET = 'tweets/REMOVE_TWEET',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE'
};

export interface SetTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
};

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: {
        text: string,
        images: string[];
    }
};

export interface AddTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
};

export interface EditTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.EDIT_TWEET;
    payload: any;
};

export interface FetchEditTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_EDIT_TWEET;
    payload: {
        text: string,
        id: string;
    }
};

export interface RemoveTweetActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.REMOVE_TWEET;
    payload: string;
};

export interface FetchTweetsActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
};

export interface SetTweetsLoadingStatusInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
};

export interface SetAddFormStateInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
};

export type TweetsActions = | SetTweetsActionInterface | SetTweetsLoadingStatusInterface | FetchTweetsActionInterface 
| FetchAddTweetActionInterface | AddTweetActionInterface | SetAddFormStateInterface |  RemoveTweetActionInterface | EditTweetActionInterface | FetchEditTweetActionInterface;
