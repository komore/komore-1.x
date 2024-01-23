import { type EToroExchangeId } from './etoro-exchange-id';

/**
 * eToro exchange
 */
export interface EToroExchange {
  /**
   * Exchange description
   */
  readonly ExchangeDescription: string;
  /**
   * Exchange identifier
   */
  readonly ExchangeID: EToroExchangeId;
}
