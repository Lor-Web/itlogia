import { createFeatureSelector, createSelector } from '@ngrx/store';
import { footerFormFeatureKey, initialState } from './footer-form.reducer';

export const selectFeature =
  createFeatureSelector<initialState>(footerFormFeatureKey);

export const selectPending = createSelector(
  selectFeature,
  (state: initialState) => state?.pending
);
