import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.state';

/**
 * Search feature selector
 */
const searchFeatureSelector = createFeatureSelector<SearchState>('search');

/**
 * Get query
 */
export const getQuery = createSelector(searchFeatureSelector, state => state.query);

/**
 * Get results
 */
export const getResults = createSelector(searchFeatureSelector, state => state.results);
