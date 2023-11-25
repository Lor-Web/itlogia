import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  sendForm,
  sendFormFailure,
  sendFormSuccess,
} from './footer-form.actions';
import { catchError, debounceTime, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ThanksDialogComponent } from '../../ui/thanks-dialog/thanks-dialog.component';

@Injectable()
export class FooterFormEffects {
  constructor(private _actions$: Actions, private _dialog: MatDialog) {}

  sendForm$ = createEffect(() =>
    this._actions$.pipe(
      ofType(sendForm),
      debounceTime(1500),
      map((data) =>
        sendFormSuccess({
          formData: data.formData,
          popupText: 'Спасибо за заказ',
        })
      ),
      catchError((error) => of(sendFormFailure({ error })))
    )
  );

  sendFormSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(sendFormSuccess),
        tap((data) => this._dialog.open(ThanksDialogComponent, { data }))
      ),
    {
      dispatch: false,
    }
  );
}
