import { type CliRouteDefinition } from './cli-route-definition';

export function cliRoute<Path extends string>(path: Path, _options: unknown): CliRouteDefinition<Path> {
  return {
    path,
  };
}
