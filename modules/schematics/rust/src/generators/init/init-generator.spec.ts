import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { changeByPath } from '../../test-helpers.spec';
import initGenerator from './init-generator';
import { type InitSchema } from './init-schema';

describe('Init generator', () => {
  it('succeeds', async () => {
    given: 'a tree with an empty workspace';
    const tree = createTreeWithEmptyWorkspace();
    and: 'a schema';
    const initSchema: Partial<InitSchema> = {};
    when: 'running the generator';
    await initGenerator(tree, initSchema);
    and: 'verifying the list of changes';
    const changes = tree.listChanges();
    expect: 'workspace files to have been created';
    expect(changes.find(changeByPath('.rustfmt.toml'))).not.toBeUndefined();
    expect(changes.find(changeByPath('Cargo.toml'))).not.toBeUndefined();
    expect(changes.find(changeByPath('rust-toolchain.toml'))).not.toBeUndefined();
    and: 'nx.json to have been modified';
    expect(changes.find(changeByPath('nx.json'))).not.toBeUndefined();
  });
});
