import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { contentRequested } from './documentation.actions';
import { DocumentationState } from './documentation.state';

/**
 * Documentation resolver
 */
@Injectable({
  providedIn: 'root'
})
export class DocumentationResolver implements Resolve<void> {
  /**
   * Class constructor
   * @param store Documentation store
   */
  constructor(private readonly store: Store<DocumentationState>) {}

  /**
   * Resolves the content path
   * @param activatedrouteSnapshot Activated route snapshot
   */
  resolve({ paramMap }: ActivatedRouteSnapshot): void {
    const contentPath = paramMap.get('contentPath');
    if (contentPath) {
      this.store.dispatch(contentRequested({ contentPath }));
    }
  }
}
