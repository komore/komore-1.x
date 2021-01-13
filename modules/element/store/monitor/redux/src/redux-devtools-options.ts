import type { ReduxDevtoolsSerializationOptions } from './redux-devtools-serialization-options';

/**
 * Redux devtools options
 */
export interface ReduxDevtoolsOptions {
  readonly features?: object | boolean;
  readonly maxAge?: number;
  readonly name?: string;
  readonly serialize?: boolean | ReduxDevtoolsSerializationOptions;
}
