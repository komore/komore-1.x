import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { registerPlugin } from './register-plugin';

describe('Register plugin', () => {
  it('adds the plugin to nx.json', () => {
    given: 'a tree with an empty workspace';
    const tree = createTreeWithEmptyWorkspace();
    when: 'registering the plugin';
    registerPlugin(tree);
    and: 'verifying the list of changes';
    const changes = tree.listChanges();
    expect: 'the nx.json file to have been modified';
    const nxJson = changes.find(({ path }) => path === 'nx.json');
    expect(nxJson).not.toBeUndefined();
    and: 'the plugin to have been added';
    const nxJsonContent = nxJson?.content?.toString() ?? '';
    const nxConfig = JSON.parse(nxJsonContent) as { readonly plugins?: ReadonlyArray<string> };
    expect(nxConfig.plugins).toContain('@pcxone/nx-rust');
  });
});
