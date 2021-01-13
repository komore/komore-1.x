import { factory } from 'typescript';
import { createElementClassSource } from './create-element-class-source';

describe('Create element class source', () => {
  it('works', () => {
    createElementClassSource(factory, attributeNames);
  });
});
