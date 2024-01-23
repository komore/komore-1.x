import { EToroCurrencyId } from '../currency/etoro-currency-id';
import { type EToroInstrumentId } from './etoro-instrument-id';
import { EToroInstrumentTypeId } from './etoro-instrument-type-id';

/**
 * eToro instrument
 */
export interface EToroInstrument {
  readonly AboveDollarPrecision: number;
  readonly AllowBuy: boolean;
  readonly AllowClosePosition: boolean;
  readonly AllowDiscountedRates: boolean;
  readonly AllowEditSlTp: boolean;
  readonly AllowEditStopLoss: boolean;
  readonly AllowEditStopLossLeveraged: boolean;
  readonly AllowEditTakeProfit: boolean;
  readonly AllowEditTakeProfitLeveraged: boolean;
  readonly AllowEntryOrders: boolean;
  readonly AllowExitOrder: boolean;
  readonly AllowManualTrading: boolean;
  readonly AllowPartialClosePosition: number;
  readonly AllowPendingOrders: boolean;
  readonly AllowRedeem: boolean;
  readonly AllowRevolvingDoors: boolean;
  readonly AllowSell: boolean;
  readonly AllowTrailingStopLoss: boolean;
  readonly BuyCurrencyID: EToroCurrencyId;
  readonly BuyEndOfWeekFee: number;
  readonly BuyOverNightFee: number;
  readonly DefaultLeverage: number;
  readonly DefaultStopLossPercentage: number;
  readonly DefaultStopLossPercentageLeveraged: number;
  readonly DefaultStopLossPercentageNonLeveraged: number;
  readonly DefaultTakeProfitPercentage: number;
  readonly DefaultTrailingStopLoss: boolean;
  /**
   * Instrument identifier
   */
  readonly InstrumentID: EToroInstrumentId;
  readonly IsDelisted: boolean;
  readonly IsGuaranteeSlTp: boolean;
  readonly IsNonLeveragedBuyAllowed: boolean;
  readonly IsNonRealAsTRS: boolean;
  readonly IsVisible: boolean;
  readonly Leverage1MaintenanceMargin: number;
  readonly LeveragedBuyEndOfWeekFee: number;
  readonly LeveragedBuyOverNightFee: number;
  readonly LeveragedSellEndOfWeekFee: number;
  readonly LeveragedSellOverNightFee: number;
  readonly Leverages: ReadonlyArray<number>;
  readonly MarginTradeBuyMaxLeverage: number;
  readonly MarginTradeSellMaxLeverage: number;
  readonly MaxPositionUnits: number;
  readonly MaxPositionUnitsForRedeem: number;
  readonly MaxRateDiffPercentage: number;
  readonly MaxStopLossPercentage: number;
  readonly MaxStopLossPercentageLeveragedBuy: number;
  readonly MaxStopLossPercentageLeveragedSell: number;
  readonly MaxStopLossPercentageNonLeveragedBuy: number;
  readonly MaxStopLossPercentageNonLeveragedSell: number;
  readonly MaxTakeProfitPercentage: number;
  readonly MinPositionAmount: number;
  readonly MinPositionAmountAbsolute: number;
  readonly MinPositionAmountAbsoluteDiscounted: number;
  readonly MinPositionUnitsForRedeem: number;
  readonly MinStopLossPercentage: number;
  readonly MinTakeProfitPercentage: number;
  readonly NonLeveragedBuyCFDOverNightFee: number;
  readonly NonLeveragedBuyEndOfWeekFee: number;
  readonly NonLeveragedBuyOverNightFee: number;
  readonly NonLeveragedSellEndOfWeekFee: number;
  readonly NonLeveragedSellOverNightFee: number;
  readonly PotentialDisplayLeverages: ReadonlyArray<number>;
  readonly Precision: number;
  readonly RealTradeBuyMaxLeverage: number;
  readonly RealTradeSellMaxLeverage: number;
  readonly RequiresW8Ben: boolean;
  readonly RestrictedManualOpen: boolean;
  readonly SdrtEligible: boolean;
  readonly SellCurrencyID: EToroCurrencyId;
  readonly SellEndOfWeekFee: number;
  readonly SellOverNightFee: number;
  readonly SettledBuyMaxLeverage: number;
  readonly SettledSellMaxLeverage: number;
  readonly TypeID: EToroInstrumentTypeId;
  readonly UnitMargin: number;
}
