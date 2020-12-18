import { UrlSegment, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { DocumentationResolver } from './documentation.resolver';

/**
 * Documentation routes
 */
export const documentationRoutes: Routes = [
  {
    matcher: urlSegments => ({
      consumed: urlSegments,
      posParams: {
        contentPath: new UrlSegment(urlSegments.map(({ path }) => path).join('-'), {})
      }
    }),
    component: DocumentationComponent,
    resolve: {
      _: DocumentationResolver
    }
  }
];
