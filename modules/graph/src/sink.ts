import { PartialObserver } from 'rxjs';

/**
 * Sink
 * @template InputType Input type
 */
export type Sink<InputType> = PartialObserver<InputType>;

/**
 * Sink input type
 * @template SinkType Sink type
 */
export type SinkInputType<SinkType extends Sink<any>> = SinkType extends Sink<infer InputType> ? InputType : never;
