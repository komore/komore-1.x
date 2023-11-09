import { cliEvent, type CliEvent } from '@komore/cli';
import { map, mergeMap, take, tapNext, type Observable } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';

/**
 * Displays the komore version
 */
export function displayKomoreVersion(): Observable<CliEvent> {
  return createWorkspaceContext(process.cwd()).pipe(
    mergeMap(context => context.package.list.installed),
    take(1),
    map(packages => packages.filter(({ name }) => name.startsWith('@komore/'))),
    tapNext(packages => {
      // TODO: remove
      console.log('komore v?.?.?', packages);
    }),
    // TODO: tableDisplayed
    map(_packages => cliEvent.messageDisplayed({ message: 'komore v?.?.?' }))
  );
}
