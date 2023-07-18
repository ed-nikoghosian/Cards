import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  cards: cardsReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type DispatchResponse = { [key: string]: string } | string;

export type AppThunkType<R = Promise<void | DispatchResponse | any>> = ThunkAction<R, RootState, undefined, Action>;

export default store;
