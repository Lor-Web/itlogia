import { Routes } from '@angular/router';
import { CatalogComponent, NotFoundComponent } from './pages';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];
