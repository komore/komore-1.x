import { type Tree } from "@nrwl/devkit";
import initGenerator from '../init/init-generator';

export async function addLibraryFiles(tree: Tree, options: unknown): Promise<void> {
  if (!tree.exists('Cargo.toml')) {
    await initGenerator(tree, {});
  }

  
}
