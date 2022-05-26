import { type ExtensionContext, type Uri } from 'vscode';
import { partsToFileUri } from './parts-to-file-uri';

/**
 * Creates a function that returns an icon URI, given parts
 *
 * @param extensionContext Extension context
 * @returns Function that returns an icon URI, given parts
 */
export function partsToIconUri(extensionContext: ExtensionContext): (parts: ReadonlyArray<string>) => Uri {
  const toFileUri = partsToFileUri(extensionContext);
  return parts => toFileUri(['assets', 'icons', ...parts]);
}
