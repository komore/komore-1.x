/**
 * Redux devtools connection
 */
export interface ReduxDevtoolsConnection {
  subscribe(listener: (change: unknown) => void): void;
  unsubscribe(): void;
  send(action: unknown, state: unknown): void;
  init(state?: unknown): void;
  error(error: unknown): void;
}
