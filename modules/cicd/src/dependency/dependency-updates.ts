import { type Observable } from '@komore/reactive';

/**
 * Dependency updates
 */
export interface DependencyUpdates {
  (): Observable<void>;
}
