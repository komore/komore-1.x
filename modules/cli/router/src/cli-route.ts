import { type CliRouteDefinition } from './definition/cli-route-definition';

export function cliRoute<Path extends string>(_path: Path, _options: unknown): CliRouteDefinition<{}> {
  return {};
}
