import { createQueryType, queryProperties } from '@komore/query';

import { eToroDomain } from './etoro.domain';
import { type GetEToroCountriesResult } from './query/properties/get-etoro-countries-result';
import { type GetEtoroInstrumentsResult } from './query/properties/get-etoro-instruments-result';
import { type GetEtoroInstrumentsProperties } from './query/properties/get-etoro-instruments-properties';

/**
 * eToro query
 */
export const eToroQuery = createQueryType(eToroDomain, {
  /**
   * Returns the list of available countries
   */
  getCountries: queryProperties<GetEToroCountriesResult>(),
  /**
   * Returns the instruments
   */
  getInstruments: queryProperties<GetEtoroInstrumentsResult, GetEtoroInstrumentsProperties>(),
});
