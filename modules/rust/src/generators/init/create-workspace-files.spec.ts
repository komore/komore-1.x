import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { changeByPath } from '../../test-helpers.spec';
import { createWorkspaceFiles } from './create-workspace-files';
import { type InitSchema } from './init-schema';

describe('Create workspace files', () => {
  const options: InitSchema = {
    channel: 'test-channel'
  };

  it('properly creates templated files', async () => {
    given: 'a tree with an empty workspace';
    const tree = createTreeWithEmptyWorkspace();
    when: 'creating workspace files';
    await createWorkspaceFiles(tree, options);
    and: 'verifying the list of changes';
    const changes = tree.listChanges();
    expect: 'the .rustfmt.toml file to have been added';
    const rustfmtToml = changes.find(changeByPath('.rustfmt.toml'));
    expect(rustfmtToml).not.toBeUndefined();
    and: 'the Cargo.toml file to have been added';
    const cargoToml = changes.find(changeByPath('Cargo.toml'));
    expect(cargoToml).not.toBeUndefined();
    and: 'the rust-toolchain.toml file to have been added';
    const rustToolchainToml = changes.find(changeByPath('rust-toolchain.toml'));
    expect(rustToolchainToml).not.toBeUndefined();
    and: 'the rust-toolchain.toml file to include the channel option';
    expect(rustToolchainToml?.content?.toString()).toContain(`channel = "${options.channel}"`);
  });
});
