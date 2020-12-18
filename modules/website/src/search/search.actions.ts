import { createAction, props } from '@ngrx/store';

/**
 * Query updated
 */
export const queryUpdated = createAction('[SEARCH] Query updated', props<{ query: string }>());
