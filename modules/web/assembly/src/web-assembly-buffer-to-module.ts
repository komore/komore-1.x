import { deferPromise } from '@komore/reactive';

/**
 * Compiles a WebAssembly module from a buffer
 *
 * @returns WebAssembly module
 */
export function webAssemblyBufferToModule(bytes: BufferSource): Observable<WebAssembly.Module> {
  return deferPromise(() => WebAssembly.compile(bytes));
}
