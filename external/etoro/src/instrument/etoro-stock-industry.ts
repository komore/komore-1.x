import { EToroStockIndustryId } from './etoro-stock-industry-id';

/**
 * eToro stock industry
 */
export interface EToroStockIndustry {
  /**
   * Industry identifier
   */
  readonly IndustryId: EToroStockIndustryId;
  /**
   * Industry name
   */
  readonly IndustryName: string;
}
