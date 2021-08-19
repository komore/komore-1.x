import type { Observable } from '@komore/reactive';
import type { Host } from '@komore/runtime';

/**
 * Application
 * @template HostType Host type
 * @template ParametersType Parameters type
 * @template ResultType Result type
 */
export interface Application<HostType extends Host, ParametersType, ResultType> {
  (parameters: ParametersType, host: HostType): Observable<ResultType>;
}
