import { mapTo, merge } from '@komore/reactive';

import { observeWebGLContextLoss } from './observe-webgl-context-loss';
import { observeWebGLContextRestoration } from './observe-webgl-context-restoration';

/**
 * Observes a WebGL context' availability
 *
 * @param canvas Canvas
 * @returns Observable that emits true when the context is available or false otherwise
 */
export function observeWebGLContextAvailability(canvas: HTMLCanvasElement): Observable<boolean> {
  return merge([
    observeWebGLContextRestoration(canvas).pipe(mapTo(true)),
    observeWebGLContextLoss(canvas).pipe(mapTo(false)),
  ]);
}
