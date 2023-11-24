import { createReducer, on } from '@ngrx/store';
import {
  getPizzaCards,
  getPizzaCardsFailure,
  getPizzaCardsSuccess,
} from './catalog.actions';
import { PizzaCard } from '../../../shared';

export interface initialState {
  items: PizzaCard[];
  pending: {
    getItemsLoading: boolean;
  };
  error?: unknown;
}

export const catalogInitialState: initialState = {
  items: [],
  pending: {
    getItemsLoading: false,
  },
};

export const catalogFeatureKey = 'catalog';

export const catalogReducer = createReducer(
  catalogInitialState,
  on(getPizzaCards, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      getItemsLoading: true,
    },
    error: undefined,
  })),
  on(getPizzaCardsSuccess, (state, data) => ({
    ...state,
    items: data.items,
    pending: {
      ...state.pending,
      getItemsLoading: false,
    },
    error: undefined,
  })),
  on(getPizzaCardsFailure, (state, error) => ({
    ...state,
    pending: {
      ...state.pending,
      getItemsLoading: false,
    },
    error,
  }))
);
