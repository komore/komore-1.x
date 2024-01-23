import { matchQuery } from '@komore/query';
import { map } from '@komore/reactive';

import { getEToroCountries, getEToroInstruments } from '@/etoro';

import { type EToroQueryHandler } from './etoro-query-handler';
import { type EToroQueryHandlerOptions } from './etoro-query-handler-options';

/**
 * Creates an eToro query handler
 *
 * @param handlerOptions eToro query handler options
 * @returns eToro query handler
 */
export function createEToroQueryHandler(handlerOptions: EToroQueryHandlerOptions): EToroQueryHandler {
  const { apiClient } = handlerOptions;
  const getCountries = getEToroCountries(apiClient);
  const getInstruments = getEToroInstruments(apiClient);
  return query =>
    matchQuery(query, {
      getCountries: () => getCountries().pipe(map(countries => ({ countries }))),
      getInstruments,
    });
}
