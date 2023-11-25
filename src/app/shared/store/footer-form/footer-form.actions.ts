import { createAction, props } from '@ngrx/store';
import { SendFooterForm } from '../../types';

export const sendForm = createAction(
  '[Footer Form] Send Form Launch',
  props<{ formData: SendFooterForm }>()
);

export const sendFormSuccess = createAction(
  '[Footer Form] Send Form Success',
  props<{ formData: SendFooterForm; popupText: string }>()
);
export const sendFormFailure = createAction(
  '[Footer Form] Send Form Failure',
  props<{ error: unknown }>()
);
