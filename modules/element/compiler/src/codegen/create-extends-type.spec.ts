import { factory } from 'typescript';
import { createExtendsType } from './create-extends-type';

describe('Create element heritage clause', () => {
  it('creates an heritage clause that extends the specified base type name', () => {
    // given: a base type name
    const baseType = 'BaseType';
    // when: creating an element's heritage clause
    const heritageClause = createExtendsType(factory, baseType);
    // then: a clause extending the base class is created
    expect(heritageClause).toBeInlineSource(`extends ${baseType}`);
  });

  it('creates an heritage clause that extends the specified base type identifier', () => {
    // given: a base type name
    const baseType = factory.createIdentifier('BaseType');
    // when: creating an element's heritage clause
    const heritageClause = createExtendsType(factory, baseType);
    // then: a clause extending the base class is created
    expect(heritageClause).toBeInlineSource(`extends ${baseType}`);
  });
});
