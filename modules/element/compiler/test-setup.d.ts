declare namespace jest {
  interface Matchers<R> {
    toBeSource(expected: string): CustomMatcherResult;
    toBeInlineSource(expected: string): CustomMatcherResult;
  }
}

declare function createTestSource(sourceText: string): import('typescript').SourceFile;
