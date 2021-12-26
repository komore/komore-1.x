import { defer, fromEvent, type Observable } from '@komore/reactive';

/**
 * Observes a WebGL context loss
 * @param canvas Canvas
 * @returns Observable that emits when the WebGL context is lost
 */
export function observeContextLoss(canvas: HTMLCanvasElement): Observable<WebGLContextEvent> {
  return defer(() => fromEvent<WebGLContextEvent>(canvas, 'webglcontextlost'));
}
