import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

/**
 * Portal routes
 */
export const portalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../home').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('../documentation').then(({ DocumentationModule }) => DocumentationModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
