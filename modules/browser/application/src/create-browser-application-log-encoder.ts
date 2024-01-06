import { type LogEncoder } from '@komore/logging';

/**
 * Creates a browser application log encoder
 *
 * @returns Browser application log encoder
 */
export function createBrowserApplicationLogEncoder(): LogEncoder {
  return ({ event: _, message }) => {
    return message;
  };
}
