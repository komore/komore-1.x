import { window, type ExtensionContext, type Uri } from 'vscode';

/**
 * Creates a function that opens an event store, given a URI
 *
 * @param extensionContext Extension context
 * @returns Function that opens an event store
 */
export function uriToOpenEventStore(_extensionContext: ExtensionContext): (uri: Uri) => void {
  return uri => {
    const msg = `Open event store not implemented (${uri})`;
    console.log(msg);
    window.showWarningMessage(msg);
  };
}
