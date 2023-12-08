import { objectToEntries } from '@komore/functional';
import { of, throwError, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type GenericCliRouteDefinition } from '../definition/generic-cli-route-definition';

export function commandLineToCliRouteDefinition<
  RouteDefinitions extends ReadonlyRecord<string, GenericCliRouteDefinition>,
>(routeDefinitions: RouteDefinitions): (commandLine: ReadonlyArray<string>) => Observable<GenericCliRouteDefinition> {
  return commandLine => {
    console.log('looking for a CLI route match', commandLine);
    const routeDefinitionEntry = objectToEntries(routeDefinitions).find(([path]) => path === commandLine[0]);
    if (routeDefinitionEntry === undefined) {
      console.log('no command found', commandLine.join(' '));
      return throwError(() => new Error(`oopsie no command found`));
    }

    const [path, routeDefinition] = routeDefinitionEntry;
    console.log(`found route def at "${path}"`, routeDefinition);

    return of(routeDefinition);
  };
}
