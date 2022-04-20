import { cache, deferPromise } from '@komore/reactive';

/**
 * Lazy loaded TypeScript module
 */
export const lazyLoadedTypeScriptModule = deferPromise(() => import('typescript')).pipe(cache());
