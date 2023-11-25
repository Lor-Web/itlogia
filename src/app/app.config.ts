import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  catalogFeatureKey,
  catalogReducer,
} from './pages/catalog/store/catalog.reducer';
import { CatalogEffects } from './pages/catalog/store/catalog.effects';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  footerFormFeatureKey,
  footerFormReducer,
} from './shared/store/footer-form/footer-form.reducer';
import { FooterFormEffects } from './shared/store/footer-form/footer-form.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ [footerFormFeatureKey]: footerFormReducer }),
    provideState({ name: catalogFeatureKey, reducer: catalogReducer }),
    provideEffects([CatalogEffects, FooterFormEffects]),
    provideEnvironmentNgxMask(),
    provideAnimations(),
  ],
};
