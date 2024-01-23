import { map, type Observable } from '@komore/reactive';

import { type EToroApiClient } from '../etoro-api-client';
import { type EToroInstrument } from './etoro-instrument';

/**
 * Returns the list of eToro instruments
 *
 * @param apiClient eToro API client
 * @returns List of eToro instruments
 */
export function getEToroInstruments(apiClient: EToroApiClient): () => Observable<ReadonlyArray<EToroInstrument>> {
  return () =>
    apiClient<{ readonly Instruments: ReadonlyArray<EToroInstrument> }>(
      'etoro',
      'GET',
      'sapi/trade-real/instruments'
    ).pipe(map(response => response.Instruments));
}
