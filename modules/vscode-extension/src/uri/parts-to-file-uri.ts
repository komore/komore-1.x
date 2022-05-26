import { join } from 'path';
import { Uri, type ExtensionContext } from 'vscode';

/**
 * Creates a function that returns a file URI, given parts
 *
 * @param extensionContext Extension context
 * @returns Function that returns a file URI, given parts
 */
export function partsToFileUri(extensionContext: ExtensionContext): (parts: ReadonlyArray<string>) => Uri {
  return parts => {
    const filePath = join(extensionContext.extensionPath, ...parts);
    return Uri.file(filePath);
  };
}
