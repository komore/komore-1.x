import { type EToroCryptoCategory } from './etoro-crypto-category';
import { type EToroExchange } from './etoro-exchange';
import { type EToroInstrumentType } from './etoro-instrument-type';
import { type EToroStockIndustry } from './etoro-stock-industry';

/**
 * eToro instrument groups
 */
export interface EToroInstrumentGroups {
  /**
   * Crypto categories
   */
  readonly CryptoCategories: ReadonlyArray<EToroCryptoCategory>;
  /**
   * Exchanges
   */
  readonly ExchangeInfo: ReadonlyArray<EToroExchange>;
  /**
   * Instrument types
   */
  readonly InstrumentTypes: ReadonlyArray<EToroInstrumentType>;
  /**
   * Stock industries
   */
  readonly StocksIndustries: ReadonlyArray<EToroStockIndustry>;
}
