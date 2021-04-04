
import { join } from 'path';
import { ExtensionContext, Uri } from 'vscode';

/**
 * File locator
 */
export class FileLocator {
  /**
   * Class constructor
   * @param extensionContext Extension context
   */
  constructor(private readonly extensionContext: ExtensionContext) {}

  /**
   * Get a file URI
   * @param parts Parts
   * @returns File URI
   */
  getFileUri(...parts: ReadonlyArray<string>): Uri {
    const filePath = join(this.extensionContext.extensionPath, ...parts);
    return Uri.file(filePath);
  }

  /**
   * Get an icon URI
   * @param parts Parts
   * @returns Icon URI
   */
  getIconUri(...parts: ReadonlyArray<string>): Uri {
    return this.getFileUri('assets', 'icons', ...parts);
  }
}
