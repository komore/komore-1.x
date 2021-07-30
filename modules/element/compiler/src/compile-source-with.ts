import type { Observable } from '@komore/reactive';
import type { NodeFactory } from 'typescript';
import { compileSource } from './compile-source';

/**
 * Creates a function that compiles a source with a TypeScript node factory
 * @param factory TypeScript node factory
 * @returns Function that compiles a source with a TypeScript node factory
 */
export function compileSourceWith(factory: NodeFactory): (source: string) => Observable<void> {
  return source => compileSource(factory, source);
}
