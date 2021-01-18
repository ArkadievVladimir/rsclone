import { compose, createStore } from 'redux';
import { rootReducer } from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './saga';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { UserState } from './ducks/user/contracts/state';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose;
    }
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
    tweet: TweetState;
    user: UserState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
