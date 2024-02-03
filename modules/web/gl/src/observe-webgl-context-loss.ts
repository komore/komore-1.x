import { defer, fromEvent } from '@komore/reactive';

/**
 * Observes a WebGL context loss
 *
 * @param canvas Canvas
 * @returns Observable that emits when the WebGL context is lost
 */
export function observeWebGLContextLoss(canvas: HTMLCanvasElement): Observable<WebGLContextEvent> {
  return defer(() => fromEvent<WebGLContextEvent>(canvas, 'webglcontextlost'));
}
