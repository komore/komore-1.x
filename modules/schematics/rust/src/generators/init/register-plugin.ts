import { readWorkspaceConfiguration, updateWorkspaceConfiguration, type Tree } from '@nrwl/devkit';

/**
 * Registers the plugin
 * @param tree Tree
 */
export function registerPlugin(tree: Tree): void {
  const workspaceConfiguration = readWorkspaceConfiguration(tree);
  const existingPlugins = workspaceConfiguration.plugins ?? [];
  updateWorkspaceConfiguration(tree, {
    ...workspaceConfiguration,
    plugins: [...existingPlugins, '@pcxone/nx-rust']
  });
}
