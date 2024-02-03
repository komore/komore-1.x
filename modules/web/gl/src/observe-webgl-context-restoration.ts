import { defer, fromEvent } from '@komore/reactive';

/**
 * Observes a WebGL context restoration
 *
 * @param canvas Canvas
 * @returns Observable that emits when the WebGL context is restored
 */
export function observeWebGLContextRestoration(canvas: HTMLCanvasElement): Observable<WebGLContextEvent> {
  return defer(() => fromEvent<WebGLContextEvent>(canvas, 'webglcontextrestored'));
}
