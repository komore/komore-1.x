import { empty } from '@komore/reactive';

import { type DependencyUpdates } from './dependency-updates';

/**
 * Defines dependency updates
 *
 * @returns Dependency updates
 */
export function defineDependencyUpdates(): DependencyUpdates {
  return () => empty;
}
