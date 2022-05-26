import { generateFiles, type Tree } from '@nrwl/devkit';
import { join } from 'path';
import { type InitSchema } from './init-schema';
import { type InitTemplateParameters } from './init-template-parameters';

/**
 * Creates workspace files
 * @param tree Tree
 * @param options Init schema
 */
export function createWorkspaceFiles(tree: Tree, options: InitSchema): void {
  const templateFilesPath = join(__dirname, 'templates');
  const templateParameters: InitTemplateParameters = {
    toolchainChannel: options.channel
  };

  generateFiles(tree, templateFilesPath, '.', templateParameters);
}
