import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  //   persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import items from './reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    posts: items,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
