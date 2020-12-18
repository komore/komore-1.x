import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KomoreState } from './komore.state';

/**
 * komore feature selector
 */
const komoreFeatureSelector = createFeatureSelector<KomoreState>('komore');

/**
 * Get search query
 */
export const getSearchQuery = createSelector(
  komoreFeatureSelector,
  state => state.searchQuery
);

/**
 * Is navigation expanded
 */
export const isNavigationExpanded = createSelector(
  komoreFeatureSelector,
  state => state.navigationExpanded
);
