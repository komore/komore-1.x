import { factory } from 'typescript';
import { createElementHeritageClause } from './create-element-heritage-clause';

describe('Create element heritage clause', () => {
  it('creates an heritage clause that extends the specified base class name', () => {
    // given: a base class name
    const baseClassName = 'BaseClass';
    // when: creating an element's heritage clause
    const heritageClause = createElementHeritageClause(factory, baseClassName);
    // then: a clause extending the base class is created
    expect(heritageClause).toBeInlineSource(`extends ${baseClassName}`);
  })
});
