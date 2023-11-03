import { type OpenTofuLog } from './opentofu-log';
import { type OpenTofuLogDetails } from './opentofu-log-details';

/**
 * Generic OpenTofu log
 */
export type GenericOpenTofuLog = OpenTofuLog<keyof OpenTofuLogDetails>;
