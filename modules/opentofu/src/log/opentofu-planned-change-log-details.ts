import { type OpenTofuLogResource } from './opentofu-log-resource';

/**
 * OpenTofu planned_change log details
 */
export interface OpenTofuPlannedChangeLogDetails {
  readonly change: {
    readonly resource: OpenTofuLogResource;
    readonly action: 'create';
  };
}
