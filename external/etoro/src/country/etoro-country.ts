import { type EToroRiskGroupId } from '../risk/etoro-risk-group-id';
import { type EToroCountryId } from './etoro-country-id';

/**
 * eToro country
 */
export interface EToroCountry {
  readonly abbreviation: string;
  readonly countryId: EToroCountryId;
  readonly isoCode: string;
  readonly longAbbreviation: string;
  /**
   * Country name
   */
  readonly name: string;
  readonly riskGroupID: EToroRiskGroupId;
}
