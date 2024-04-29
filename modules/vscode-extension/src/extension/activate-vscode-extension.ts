import { isUndefined } from '@komore/functional';
import {
  filter,
  first,
  firstValueFrom,
  ignoreValues,
  map,
  merge,
  redactValue,
  switchMap,
  takeUntil,
  tapNext,
} from '@komore/reactive';
import { type ExtensionContext } from 'vscode';
import { offerConfigurationReloadOnConfigurationChange } from '../configuration/offer-configuration-reload-on-configuration-change';
import { isVscodeExtensionEventOfType } from '../event/is-vscode-extension-event-of-type';
import { vscodeExtensionEventToEventData } from '../event/vscode-extension-event-to-event-data';
import { vscodeExtensionEvents } from '../event/vscode-extension-events';
import { addCommandSubscriptionsToExtensionContext } from './add-command-subscriptions-to-extension-context';
import { addLanguageCodeLensProviders } from './add-language-code-lens-providers';
import { addWorkspaceSubscriptionsToExtensionContext } from './add-workspace-subscriptions-to-extension-context';
import { vscodeExtensionContext, vscodeExtensionContextSubject } from './vscode-extension-context';

/**
 * Activates the Visual Studio Code extension
 *
 * @param extensionContext Extension context
 * @returns Promise that resolves once the activation has completed
 */
export async function activateVscodeExtension(extensionContext: ExtensionContext): Promise<void> {
  //this.workspaceConfiguration = workspace.getConfiguration('komore');
  console.log('activating');

  vscodeExtensionContextSubject.next(extensionContext);

  const activation$ = vscodeExtensionContext.pipe(
    first(),
    tapNext(addCommandSubscriptionsToExtensionContext),
    tapNext(addWorkspaceSubscriptionsToExtensionContext),
    tapNext(addLanguageCodeLensProviders),
    redactValue()
  );

  const configurationChanged$ = vscodeExtensionEvents.pipe(
    filter(isVscodeExtensionEventOfType('configurationChange')),
    map(vscodeExtensionEventToEventData),
    filter(data => data.affectsConfiguration('komore'))
  );

  const offerConfigurationReloadOnConfigurationChange$ = configurationChanged$.pipe(
    switchMap(offerConfigurationReloadOnConfigurationChange)
  );

  merge([offerConfigurationReloadOnConfigurationChange$])
    .pipe(ignoreValues(), takeUntil(vscodeExtensionContext.pipe(filter(isUndefined))))
    .subscribe();

  return firstValueFrom(activation$);
}
