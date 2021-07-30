import type { NavigateToOptions } from './navigate-to';

/**
 * Navigate options
 * @template State State type
 */
export interface NavigateOptions<State> extends NavigateToOptions<State> {}

export function navigate<State = undefined>(x: unknown, options?: NavigateOptions<State>): void {
  console.log('navigate', x, options);
}
