/**
 * Function mock
 * @template F Function type
 */
export type FunctionMock<F extends (...args: ReadonlyArray<any>) => any> = jest.Mock<ReturnType<F>, Parameters<F>>;
