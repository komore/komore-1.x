/**
 * Log group
 * @template LogGroupName Log group name
 */
export type LogGroup<LogGroupName extends string> = Readonly<{
  name: LogGroupName;
}>;
