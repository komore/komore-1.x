import type { Observable } from '@komore/reactive';
import { mapTo, merge } from '@komore/reactive';
import { observeContextLoss } from './observe-context-loss';

/**
 * Observes a WebGL context' availability
 * @param canvas Canvas
 * @returns Observable that emits true when the context is available or false otherwise
 */
export function observeContextAvailability(canvas: HTMLCanvasElement): Observable<boolean> {
  return merge([observeContextAvailability(canvas).pipe(mapTo(true)), observeContextLoss(canvas).pipe(mapTo(false))]);
}
