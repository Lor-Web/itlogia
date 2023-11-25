import { Injectable } from '@angular/core';
import { selectPending } from './footer-form.selectors';
import { Store } from '@ngrx/store';
import { sendForm } from './footer-form.actions';
import { SendFooterForm } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class FooterFormFacadeService {
  public getSelectPenging$ = this.store.select(selectPending);

  constructor(private store: Store) {}

  public sendForm(formData: SendFooterForm): void {
    this.store.dispatch(sendForm({ formData }));
  }
}
