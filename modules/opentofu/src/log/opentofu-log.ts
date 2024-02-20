import { type BaseOpenTofuLog } from './base-opentofu-log';
import { type OpenTofuLogDetails } from './opentofu-log-details';

/**
 * OpenTofu log
 *
 * @template LogType Log type
 */
export type OpenTofuLog<LogType extends keyof OpenTofuLogDetails = keyof OpenTofuLogDetails> =
  BaseOpenTofuLog<LogType> & OpenTofuLogDetails[LogType];
