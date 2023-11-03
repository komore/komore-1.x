import { type OpenTofuLogDetails } from './opentofu-log-details';
import { type OpenTofuLogLevel } from './opentofu-log-level';

/**
 * Base OpenTofu log
 *
 * @template LogType Log type
 */
export interface BaseOpenTofuLog<LogType extends keyof OpenTofuLogDetails> {
  readonly '@level': OpenTofuLogLevel;
  readonly '@message': string;
  readonly '@module': string;
  readonly '@timestamp': string;
  readonly type: LogType;
}
