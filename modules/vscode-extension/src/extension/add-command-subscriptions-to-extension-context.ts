import { commands, type ExtensionContext } from 'vscode';
import { uriToOpenCommandHandler } from '../command/uri-to-open-command-handler';
import { uriToOpenCommandHandlerFunction } from '../command/uri-to-open-command-handler-function';
import { uriToOpenCommandStore } from '../command/uri-to-open-command-store';
import { uriToOpenDomain } from '../command/uri-to-open-domain';
import { uriToOpenEventReducer } from '../command/uri-to-open-event-reducer';
import { uriToOpenEventStore } from '../command/uri-to-open-event-store';
import { uriToOpenStack } from '../command/uri-to-open-stack';

/**
 * Adds command subscriptions to an extension context
 *
 * @param extensionContext Extension context
 */
export function addCommandSubscriptionsToExtensionContext(extensionContext: ExtensionContext): void {
  extensionContext.subscriptions.push(
    commands.registerCommand('komore.openCommandHandler', uriToOpenCommandHandler(extensionContext)),
    commands.registerCommand('komore.openCommandHandlerFunction', uriToOpenCommandHandlerFunction(extensionContext)),
    commands.registerCommand('komore.openCommandStore', uriToOpenCommandStore(extensionContext)),
    commands.registerCommand('komore.openDomain', uriToOpenDomain(extensionContext)),
    commands.registerCommand('komore.openEventReducer', uriToOpenEventReducer(extensionContext)),
    commands.registerCommand('komore.openEventStore', uriToOpenEventStore(extensionContext)),
    commands.registerCommand('komore.openStack', uriToOpenStack(extensionContext))
  );
}
