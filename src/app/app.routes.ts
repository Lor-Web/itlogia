import { Routes } from '@angular/router';
import { CatalogComponent, NotFoundComponent } from './pages';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  catalogFeatureKey,
  catalogReducer,
} from './pages/catalog/store/catalog.reducer';
import { CatalogEffects } from './pages/catalog/store/catalog.effects';

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
  },
  { path: '**', component: NotFoundComponent },
];
