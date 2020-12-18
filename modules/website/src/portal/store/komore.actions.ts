import { createAction, props } from '@ngrx/store';

/**
 * Search query updated
 */
export const searchQueryUpdated = createAction('[SHELL] Search query updated', props<{ searchQuery: string }>());
