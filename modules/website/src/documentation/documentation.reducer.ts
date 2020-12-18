import { createReducer, on } from '@ngrx/store';
import { contentLoaded, contentLoadingFailed, contentRequested } from './documentation.actions';
import { DocumentationState } from './documentation.state';

/**
 * Initial documentation state
 */
const initialDocumentationState: DocumentationState = {
  contentLoading: false
};

/**
 * Documentation state reducer
 */
export const documentationReducer = createReducer(
  initialDocumentationState,
  on(contentLoaded, (state, { content, contentPath }) => ({
    ...state,
    content,
    contentError: undefined,
    contentLoading: false,
    contentPath
  })),
  on(contentLoadingFailed, (state, { contentError, contentPath }) => ({
    ...state,
    contentError,
    contentLoading: false,
    contentPath
  })),
  on(contentRequested, (state, { contentPath }) =>
    state.contentPath === contentPath
      ? state
      : {
          ...state,
          content: undefined,
          contentLoading: true,
          contentPath
        }
  )
);
