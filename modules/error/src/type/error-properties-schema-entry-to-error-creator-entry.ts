import { type Domain } from '@komore/domain';
import { type TypeCreator } from '@komore/typescript';

import { type ErrorCreator } from '../creator/error-creator';
import { KomoreError } from '../komore-error';
import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorCreatorEntry } from './error-creator-entry';

/**
 * Returns an error creator entry, given an entry with an error properties schema
 *
 * @param domain Domain
 * @returns Error creator entry
 * @template DomainType Domain type
 * @private
 */
export function errorPropertiesSchemaEntryToErrorCreatorEntry<DomainType extends Domain>(
  domain: DomainType
): (entry: readonly [code: string, schema: ErrorPropertiesSchema<unknown>]) => ErrorCreatorEntry {
  return ([code]) => {
    const creator = ((context: unknown) => new KomoreError(domain, code, context)) as ErrorCreator<
      typeof code,
      TypeCreator<any, any>
    >;
    Object.defineProperty(creator, 'code', { enumerable: true, value: code, writable: false });
    return [code, creator];
  };
}
