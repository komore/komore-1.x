import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvalidParameterValueException } from '../exceptions/invalid-parameter-value-exception';

type RequiredFields<T, K extends keyof T> = {
  [P in K]-?: NonNullable<T[P]>;
}

/**
 * Asserts that a request does not feature unsupported properties
 * @param requestFields Request fields
 * @template RequestType Request type
 * @template RequestFields Request fields
 */
export const throwIfMissingProperties = <RequestType extends object, RequestFields extends (keyof RequestType)[]>(
  ...requestFields: RequestFields
): OperatorFunction<
  RequestType,
  Omit<RequestType, RequestFields[number]> & RequiredFields<RequestType, RequestFields[number]>
> =>
  map(request => {
    for (const requestField of requestFields) {
      if ((request as RequestType)[requestField] === undefined) {
        throw new InvalidParameterValueException(`missing parameter: ${requestField}`);
      }
    }

    return request as Omit<RequestType, RequestFields[number]> & RequiredFields<RequestType, RequestFields[number]>;
  });
