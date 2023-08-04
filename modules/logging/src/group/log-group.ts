/**
 * Log group
 *
 * @template LogGroupName Log group name
 */
export interface LogGroup<LogGroupName extends string> {
  readonly name: LogGroupName;
}
