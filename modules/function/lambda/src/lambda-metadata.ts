import { Context } from 'aws-lambda';

/**
 * Lambda metadata
 * @template EventType Event type
 */
export type LambdaMetadata<EventType> = Readonly<{
  function: Readonly<{
    lambda: Readonly<{
      context: Context;
      event: EventType;
    }>;
  }>;
}>;
