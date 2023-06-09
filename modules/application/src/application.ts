import { type Observable } from '@komore/reactive';

/**
 * Application
 *
 * @template ParametersType Parameters type
 * @template ResultType Result type
 */
export interface Application<ParametersType, ResultType> {
  (parameters: ParametersType): Observable<ResultType>;
}
