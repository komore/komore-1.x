import { type OmitCallSignature, type PickCallSignature } from '@komore/typescript';
import { type LogLayout } from './log-layout';
import { objectWithProperties } from '@komore/functional';

/**
 * Creates a function that creates a log layout
 *
 * @param properties Log layout properties
 * @returns Function that creates a log layout
 */
export function createLogLayout(
  properties: OmitCallSignature<LogLayout>
): (transform: PickCallSignature<LogLayout>) => LogLayout {
  const withProperties = objectWithProperties(properties, {
    configurable: false,
    enumerable: false,
    writable: false,
  });
  return transform => withProperties(transform);
}
