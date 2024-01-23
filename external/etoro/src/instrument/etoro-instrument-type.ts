import { type UrlString } from '@komore/url';

import { type EToroInstrumentTypeId } from './etoro-instrument-type-id';

/**
 * eToro instrument type
 */
export interface EToroInstrumentType {
  readonly Avatars: {
    readonly default: UrlString;
  };
  /**
   * Type description
   */
  readonly InstrumentTypeDescription: string;
  /**
   * Type identifier
   */
  readonly InstrumentTypeID: EToroInstrumentTypeId;
  readonly Order: number;
  readonly PricesBy: string;
  readonly SLTApproachPercent: number;
}
