import { createReducer, on } from '@ngrx/store';
import { SendFooterForm } from '../../types';
import { sendForm, sendFormSuccess } from './footer-form.actions';

export interface initialState {
  formData?: SendFooterForm;
  pending: {
    sendFormLoading: boolean;
  };
  error?: unknown;
}

export const footerFormInitialState: initialState = {
  pending: {
    sendFormLoading: false,
  },
};

export const footerFormFeatureKey = 'footerForm';

export const footerFormReducer = createReducer(
  footerFormInitialState,
  on(sendForm, (state) => ({
    ...state,
    pending: {
      ...state.pending,
      sendFormLoading: true,
    },
    error: undefined,
  })),
  on(sendFormSuccess, (state, data) => ({
    ...state,
    formData: data.formData,
    pending: {
      ...state.pending,
      sendFormLoading: false,
    },
    error: undefined,
  })),
  on(sendFormSuccess, (state, error) => ({
    ...state,
    pending: {
      ...state.pending,
      sendFormLoading: false,
    },
    error,
  }))
);
