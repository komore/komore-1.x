/**
 * Function mock
 * @template F Function type
 */
export type FunctionMock<F extends (...args: unknown[]) => unknown> = jest.Mock<ReturnType<F>, Parameters<F>>;
