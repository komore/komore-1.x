/**
 * Function mock
 * @template F Function type
 */
export type FunctionMock<F extends (...args: any) => any> = jest.Mock<ReturnType<F>, Parameters<F>>;
