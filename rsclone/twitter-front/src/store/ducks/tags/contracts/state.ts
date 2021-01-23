import { LoadingStatus } from '../../../types';


export enum LoadingStatusHashTags {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tag {
    _id: string;
    name: string;
    count: number;
    text: string;
}

export interface TagsState {
    items: Tag[];
    LoadingStatus: LoadingStatus;
}
