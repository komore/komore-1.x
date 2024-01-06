import { objectToValues } from '@komore/functional';

import { type HttpStatus } from './http-status';
import { httpStatuses } from './http-statuses';

/**
 * Tests whether a number is a known HTTP status
 *
 * @param httpStatus HTTP status number
 * @returns true if the string is a known HTTP status
 */
export function isHttpStatus(httpStatus: number): httpStatus is HttpStatus {
  return set.has(httpStatus);
}

const set: ReadonlySet<number> = new Set(objectToValues(httpStatuses));
