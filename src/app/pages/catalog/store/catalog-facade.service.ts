import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItems, selectPending } from './catalog.selectors';
import { getPizzaCards } from './catalog.actions';

@Injectable()
export class CatalogFacadeService {
  public getSelectPenging$ = this.store.select(selectPending);
  public getSelectItems$ = this.store.select(selectItems);

  constructor(private store: Store) {}

  public getPizzaItems(): void {
    this.store.dispatch(getPizzaCards());
  }
}
