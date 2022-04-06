import { type Observable } from '@komore/reactive';

/**
 * Workflow
 */
export interface Workflow {
  (): Observable<void>;
}
