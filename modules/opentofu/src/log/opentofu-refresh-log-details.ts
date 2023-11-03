import { type OpenTofuLogResource } from './opentofu-log-resource';

/**
 * OpenTofu refresh_start and refresh_complete log details
 */
export interface OpenTofuRefreshLogDetails {
  readonly hook: {
    readonly resource: OpenTofuLogResource;
    readonly id_key: string;
    readonly id_value: string;
  };
}
