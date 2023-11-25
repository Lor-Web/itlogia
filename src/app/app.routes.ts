import { Routes } from '@angular/router';
import { CatalogComponent, NotFoundComponent } from './pages';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  catalogFeatureKey,
  catalogReducer,
} from './pages/catalog/store/catalog.reducer';
import { CatalogEffects } from './pages/catalog/store/catalog.effects';
import {
  footerFormFeatureKey,
  footerFormReducer,
} from './shared/store/footer-form/footer-form.reducer';
import { FooterFormEffects } from './shared/store/footer-form/footer-form.effects';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    providers: [
      provideState({ name: catalogFeatureKey, reducer: catalogReducer }),
      provideEffects(CatalogEffects),
    ],
  },
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full',
    providers: [
      provideState({ name: footerFormFeatureKey, reducer: footerFormReducer }),
      provideEffects(FooterFormEffects),
    ],
  },
  { path: '**', component: NotFoundComponent },
];
