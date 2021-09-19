import type { ReduxDevtoolsExtension } from './redux-devtools-extension';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: ReduxDevtoolsExtension;
  }
}

/**
 * Retrieves the Redux devtools extension, if present
 * @returns Redux devtools extension
 */
export function getReduxDevtoolsExtension(): ReduxDevtoolsExtension | undefined {
  return window.__REDUX_DEVTOOLS_EXTENSION__;
}
