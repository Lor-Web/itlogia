import { createAction, props } from '@ngrx/store';
import { PizzaCard } from '../../../shared';

export const getPizzaCards = createAction(
  '[CatalogPage] Get Pizza Cards Launch'
);
export const getPizzaCardsSuccess = createAction(
  '[CatalogPage] Get Pizza Cards Success',
  props<{ items: PizzaCard[] }>()
);
export const getPizzaCardsFailure = createAction(
  '[CatalogPage] Get Pizza Cards Failure',
  props<{ error: unknown }>()
);
