import { HttpError, HttpStatuses } from '@komore/api/http';
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Asserts that a request does not feature unsupported properties
 * @param requestFields Request fields
 * @template RequestType Request type
 * @template RequestFields Request fields
 */
export const filterUnsupportedProperties = <RequestType extends object, RequestFields extends (keyof RequestType)[]>(
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
