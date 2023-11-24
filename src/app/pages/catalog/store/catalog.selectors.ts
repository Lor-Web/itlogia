import { createFeatureSelector, createSelector } from '@ngrx/store';
import { catalogFeatureKey, initialState } from './catalog.reducer';

export const selectFeature =
  createFeatureSelector<initialState>(catalogFeatureKey);

export const selectPending = createSelector(
  selectFeature,
  (state: initialState) => state?.pending
);

export const selectItems = createSelector(
  selectFeature,
  (state: initialState) => state?.items
);
