import { matchCommand } from '@komore/command';
import { of } from '@komore/reactive';

import { BrowserRouterCommandHandler } from './browser-router-command-handler';
import { BrowserRouterCommandHandlerOptions } from './browser-router-command-handler-options';

export function createBrowserRouterCommandHandler(
  commandHandlerOptions: BrowserRouterCommandHandlerOptions
): BrowserRouterCommandHandler {
  const { navigation } = commandHandlerOptions;
  return command => {
    const result = matchCommand(command, {
      navigateBack: () => navigation.back(),
      navigateForward: () => navigation.forward(),
      navigateTo: ({ url, options }) => navigation.navigate(url, options),
      reload: () => navigation.reload(),
    }) as NavigationResult; // TODO: should be implicit
    console.log('browser router command result', command, result);
    return of(void 0);
  };
}
