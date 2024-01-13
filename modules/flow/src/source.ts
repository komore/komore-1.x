import { type Observable } from '@komore/reactive';

/**
 * Source
 * @template OutputType Output type
 */
export type Source<OutputType> = Observable<OutputType>;

/**
 * Source output type
 * @template SourceType Source type
 */
export type SourceOutputType<SourceType extends Source<any>> = SourceType extends Source<infer OutputType>
  ? OutputType
  : never;
