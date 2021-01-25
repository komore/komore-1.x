import type { LogGroup } from './log-group';

/**
 * Log group name
 * @template LogGroupType Log group type
 */
export type LogGroupName<LogGroupType extends LogGroup<any>> = LogGroupType extends LogGroup<infer LogGroupName>
  ? LogGroupName
  : never;
