import { createAction, props } from '@ngrx/store';

/**
 * Content loaded
 */
export const contentLoaded = createAction(
  '[DOCUMENTATION] Content loaded',
  props<{ contentPath: string; content: string }>()
);

/**
 * Content loading failed
 */
export const contentLoadingFailed = createAction(
  '[DOCUMENTATION] Content loading failed',
  props<{ contentPath: string; contentError: Error }>()
);

/**
 * Content requested
 */
export const contentRequested = createAction('[DOCUMENTATION] Content requested', props<{ contentPath: string }>());
