declare namespace jest {
  interface Matchers<_R> {
    toBeSource(expected: string): CustomMatcherResult;
    toBeInlineSource(expected: string): CustomMatcherResult;
  }
}
