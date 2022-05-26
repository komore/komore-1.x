import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { type LibrarySchema } from './library-schema';
import { toLibraryOptions } from './to-library-options';

describe('To library options', () => {
  const tree = createTreeWithEmptyWorkspace();

  it('uses the 2021 Rust edition by default', () => {
    given: 'a library schema without a Rust edition';
    const librarySchema: LibrarySchema = { name: 'test' };
    when: 'creating a function that builds library options from a library schema';
    const func = toLibraryOptions(tree);
    and: 'calling it';
    const libraryOptions = func(librarySchema);
    expect: 'the Rust edition to be 2021';
    expect(libraryOptions.edition).toBe('2021');
  });
});
