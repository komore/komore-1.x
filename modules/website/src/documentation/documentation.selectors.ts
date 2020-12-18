import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentationState } from './documentation.state';

/**
 * Documentation feature selector
 */
const documentationFeatureSelector = createFeatureSelector<DocumentationState>('documentation');

/**
 * Get the content
 */
export const getContent = createSelector(documentationFeatureSelector, state => state.content);

/**
 * Get the content path
 */
export const getContentPath = createSelector(documentationFeatureSelector, state => state.contentPath);

/**
 * Is content loading
 */
export const isContentLoading = createSelector(documentationFeatureSelector, state => state.contentLoading);
