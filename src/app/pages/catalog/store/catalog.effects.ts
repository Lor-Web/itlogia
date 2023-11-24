import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';
import {
  getPizzaCards,
  getPizzaCardsFailure,
  getPizzaCardsSuccess,
} from './catalog.actions';
import { PIZZA_CARDS } from '../../../shared/data/pizza-cards.data';

@Injectable()
export class CatalogEffects {
  constructor(private _actions$: Actions) {}

  loadItems$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getPizzaCards),
      debounceTime(1500),
      map(() => getPizzaCardsSuccess({ items: PIZZA_CARDS })),
      catchError((error) => of(getPizzaCardsFailure({ error })))
    )
  );
}
