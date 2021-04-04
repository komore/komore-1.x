import type { Observable } from '@komore/reactive';
import { defer, of } from '@komore/reactive';
import { Stack } from './stack';

/**
 * Creates a stack
 * @param project
 * @returns Observable stack
 */
export function createStack(project: (stack: Observable<Stack>) => Observable<Stack>): Observable<Stack> {
  return defer(() => of(new Stack(project)));
}
