import { InferActionsType } from '../types';
import { getRandomNumber } from '../utils';
import { AppThunkType } from './store';

const initialState = {
  data: [] as number[]
};

export const cardActions = {
  addCard: (payload: number) =>
    ({
      type: 'ADD_CARD',
      payload
    } as const),
  setCards: (payload: number[]) =>
    ({
      type: 'SET_CARDS',
      payload
    } as const)
};

type InitialStateType = typeof initialState;
type AuthActionType = InferActionsType<typeof cardActions>;

const cardsReducer = (state = initialState, action: AuthActionType): InitialStateType => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    case 'SET_CARDS':
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export const addCard = (): AppThunkType => async (dispatch, getState) => {
  const numbersList = getState().cards.data;
  const limit = 10000;

  let number = getRandomNumber(limit);
  while (numbersList.includes(number) && numbersList.length < limit) {
    number = getRandomNumber(limit);
  }

  dispatch(cardActions.addCard(number));
};

export const sortCards = (): AppThunkType => async (dispatch, getState) => {
  const numbersList = [...getState().cards.data];

  dispatch(cardActions.setCards(numbersList.sort((a, b) => a - b)));
};

export const removeCard =
  (number: number): AppThunkType =>
  async (dispatch, getState) => {
    const numbersList = getState().cards.data.filter((item) => item !== number);

    dispatch(cardActions.setCards(numbersList));
  };

export default cardsReducer;
