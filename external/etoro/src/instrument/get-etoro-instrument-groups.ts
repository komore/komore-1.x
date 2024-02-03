import { type EToroApiClient } from '../etoro-api-client';
import { type EToroInstrumentGroups } from './etoro-instrument-groups';

/**
 * Returns the eToro instrument groups
 *
 * @param apiClient eToro APi client
 * @returns eToro instrument groups
 */
export function getEToroInstrumentGroups(apiClient: EToroApiClient): () => Observable<EToroInstrumentGroups> {
  return () =>
    apiClient<EToroInstrumentGroups>(
      'static',
      'GET',
      'sapi/app-data/web-client/app-data/instruments-groups-extended.json'
    );
}
