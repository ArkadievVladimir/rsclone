import React from 'react';

export enum LoadingState {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export enum LoadingStateHashTags {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export interface Tag {
    _id: string;
    name: string;
    count: number;
    text: string;
}

export interface TagsState {
    items: Tag[];
    loadingState: LoadingState;
}
