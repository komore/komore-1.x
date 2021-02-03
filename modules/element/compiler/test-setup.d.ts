import type { SourceNode } from 'typescript';

declare namespace jest {
  interface Matchers<R> {
    toBeSource(expected: string): CustomMatcherResult;
    toBeInlineSource(expected: string): CustomMatcherResult;
  }
}

declare global {
  function createTestSource(sourceText: string): SourceNode;
}
