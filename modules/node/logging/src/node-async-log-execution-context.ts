import { type AsyncLocalStorage } from 'node:async_hooks';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a Node asynchronous log execution context
 *
 * @param asyncLocalStorage Asynchronous local storage
 * @returns Node asynchronous log execution context
 * @see {@link https://nodejs.org/api/async_context.html Asynchronous context tracking}
 */
export function nodeAsyncLogExecutionContext(
  asyncLocalStorage: AsyncLocalStorage<ReadonlyRecord<string, unknown>>
): () => ReadonlyRecord<string, unknown> {
  return () => asyncLocalStorage.getStore() ?? {};
}
