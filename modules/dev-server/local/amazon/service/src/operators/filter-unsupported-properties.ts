import { HttpError, HttpStatuses } from '@komore/api/http';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Asserts that a request does not feature unsupported properties
 * @param requestFields Request fields
 * @template RequestType Request type
 * @template RequestFields Request fields
 */
export const filterUnsupportedProperties = <
  RequestType extends Record<string, unknown>,
  RequestFields extends (keyof RequestType)[]
>(
  ...requestFields: RequestFields
): OperatorFunction<RequestType, Omit<RequestType, RequestFields[number]>> =>
  map(request => {
    for (const requestField of requestFields) {
      if ((request as RequestType)[requestField]) {
        throw new HttpError(HttpStatuses.NotImplemented, `unsupported request parameter: ${requestField}`);
      }
    }

    return request;
  });
