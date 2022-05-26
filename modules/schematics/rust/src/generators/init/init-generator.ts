import { type Tree } from '@nrwl/devkit';
import { mapTo } from 'rxjs';
import { createGenerator } from '../create-generator';
import { createWorkspaceFiles } from './create-workspace-files';
import { type InitSchema } from './init-schema';
import { normalizeInitSchema } from './normalize-init-schema';
import { registerPlugin } from './register-plugin';

/**
 * Generator that registers the plugin and adds default workspace files
 * @param tree Tree
 * @param options Options
 */
export default async function initGenerator(tree: Tree, initSchema: Partial<InitSchema>): Promise<void> {
  const options = normalizeInitSchema(initSchema);
  registerPlugin(tree);
  createWorkspaceFiles(tree, options);
}

createGenerator<InitSchema>(tree => initSchema$ => initSchema$.pipe(mapTo(void 0)));
