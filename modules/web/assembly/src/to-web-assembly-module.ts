import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Compiles a WebAssembly module from a buffer
 * @returns WebAssembly module
 */
export function toWebAssemblyModule(bytes: BufferSource): Observable<WebAssembly.Module> {
  return deferPromise(() => WebAssembly.compile(bytes));
}
