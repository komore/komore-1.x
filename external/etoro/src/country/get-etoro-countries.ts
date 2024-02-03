import { map } from '@komore/reactive';

import { type EToroApiClient } from '../etoro-api-client';
import { type EToroCountry } from './etoro-country';

/**
 * Returns the list of eToro countries
 *
 * @param apiClient eToro API client
 * @returns List of eToro countries
 */
export function getEToroCountries(apiClient: EToroApiClient): () => Observable<ReadonlyArray<EToroCountry>> {
  return () =>
    apiClient<{ readonly countries: ReadonlyArray<EToroCountry> }>(
      'static',
      'GET',
      'api/account/v1/user/geolocation/countries'
    ).pipe(map(response => response.countries));
}
