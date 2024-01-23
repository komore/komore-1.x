import { type EToroCountry } from '@/etoro';

/**
 * Get eToro countries result
 */
export interface GetEToroCountriesResult {
  /**
   * Countries
   */
  readonly countries: ReadonlyArray<EToroCountry>;
}
