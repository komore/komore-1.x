declare namespace jest {
  interface Matchers<R> {
    toBeSource(expected: string): CustomMatcherResult;
    toBeInlineSource(expected: string): CustomMatcherResult;
  }
}
