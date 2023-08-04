import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

//import { type ErrorCreator } from '../creator/error-creator';
import { type ErrorDefinition } from '../definition/error-definition';
import { type ErrorDefinitionProperties } from '../definition/error-definition-properties';
import { KomoreError } from '../komore-error';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorCategory } from './error-category';

/**
 * Creates an error category
 *
 * An error category is used to define errors that belong that belong together, without necessarily having a scope as
 * large as a full domain.
 *
 * @param domain Domain
 * @param categoryName Category name
 * @param errorDefinitions Error definitions
 * @returns Error group
 * @template DomainType Domain type
 * @template CategoryName Category name
 * @template ErrorDEfinitions Error definitions
 */
export function createErrorCategory<
  DomainType extends Domain<string>,
  CategoryName extends string,
  Definitions extends ReadonlyRecord<string, ErrorDefinition<ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>>
>(
  domain: DomainType,
  categoryName: CategoryName,
  definitions: Definitions
): ErrorCategory<DomainType, CategoryName, Definitions> {
  const errorCategory = <ErrorCode extends keyof Definitions>(
    errorCode: ErrorCode,
    errorContext: ErrorDefinitionProperties<Definitions[ErrorCode]>
  ) => {
    const definition = definitions[errorCode];
    if (definition === undefined) {
      throw new Error(
        `error code "${errorCode as string}" not defined in error category "${categoryName}" (domain "${domain.name}")`
      );
    }
    const [message] = definition;
    // TODO: translate message
    return new KomoreError<ErrorCategory<DomainType, CategoryName, Definitions>, ErrorCode>(
      message,
      errorCategory as unknown as ErrorCategory<DomainType, CategoryName, Definitions>,
      errorCode,
      errorContext
    );
  };

  Object.defineProperty(errorCategory, 'definitions', { enumerable: false, value: definitions, writable: false });
  Object.defineProperty(errorCategory, 'domain', { enumerable: false, value: domain, writable: false });
  Object.defineProperty(errorCategory, 'name', { enumerable: false, value: categoryName, writable: false });

  return errorCategory as ErrorCategory<DomainType, CategoryName, Definitions>;
}
