/**
 * Application
 *
 * @template ParametersType Parameters type
 * @template ResultType Result type
 */
export interface Application<ParametersType, ResultType> {
  (parameters: ParametersType): Promise<ResultType>;
}
