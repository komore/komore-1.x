import { LogGroup } from './log-group';

/**
 * Creates a log group
 * @param name Name
 * @returns Log group
 * @template LogGroupName Log group name
 */
export function createLogGroup<LogGroupName extends string>(name: LogGroupName): LogGroup<LogGroupName> {
  const logGroup: LogGroup<LogGroupName> = {
    name
  };

  return Object.defineProperty(logGroup, 'name', {
    value: name,
    writable: false
  });
}
