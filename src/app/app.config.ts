import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  catalogFeatureKey,
  catalogReducer,
} from './pages/catalog/store/catalog.reducer';
import { CatalogEffects } from './pages/catalog/store/catalog.effects';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ [catalogFeatureKey]: catalogReducer }),
    provideEffects(CatalogEffects),
    provideEnvironmentNgxMask(),
    provideAnimations()
],
};
