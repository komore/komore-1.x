import { type OpenTofuChangeSummaryLogDetails } from './opentofu-change-summary-log-details';
import { type OpenTofuPlannedChangeLogDetails } from './opentofu-planned-change-log-details';
import { type OpenTofuRefreshLogDetails } from './opentofu-refresh-log-details';
import { type OpenTofuVersionLogDetails } from './opentofu-version-log-details';

/**
 * OpenTofu log details mapping
 */
export interface OpenTofuLogDetails {
  readonly change_summary: OpenTofuChangeSummaryLogDetails;
  readonly planned_change: OpenTofuPlannedChangeLogDetails;
  readonly refresh_complete: OpenTofuRefreshLogDetails;
  readonly refresh_start: OpenTofuRefreshLogDetails;
  readonly version: OpenTofuVersionLogDetails;
}
