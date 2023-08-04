import { type LogGroup } from './log-group';

/**
 * Log group name
 *
 * @template LogGroupType Log group type
 */
export type LogGroupName<LogGroupType extends LogGroup<string>> = LogGroupType extends LogGroup<infer LogGroupName>
  ? LogGroupName
  : never;
