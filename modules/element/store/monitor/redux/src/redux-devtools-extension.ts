import type { ReduxDevtoolsConnection } from './redux-devtools-connection';
import type { ReduxDevtoolsOptions } from './redux-devtools-options';

/**
 * Redux devtools extension
 */
export interface ReduxDevtoolsExtension {
  connect(options: ReduxDevtoolsOptions): ReduxDevtoolsConnection;
  send(action: unknown, state: unknown, options: ReduxDevtoolsOptions): void;
}
