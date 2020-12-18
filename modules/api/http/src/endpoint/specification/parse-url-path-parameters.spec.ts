import { ParsePathParameters } from './parse-path-parameters';
import { expectTypeOf } from 'expect-type';

describe('Parse path parameters', () => {
  it('does not extract from paths with no parameters', () => {
    // given: a path literal with no parameters
    type Path = '/path/with/constants';
    // when: parsing the path parameters
    type Parameters = ParsePathParameters<Path>;
    // then: the type has no properties
    expectTypeOf<Parameters>().toEqualTypeOf({});
  });

  it('can extract a path parameter at the start of the path', () => {
    // given: a path literal with a path parameter at its start
    type Path = ':start/remaining/path/parts';
    // when: parsing the path parameters
    type Parameters = ParsePathParameters<Path>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ start: string }>();
  });

  it('can extract a path parameter at the end of the path', () => {
    // given: a path literal with a path parameter at its end
    type Path = 'preceding/path/parts/:end';
    // when: parsing the path parameters
    type Parameters = ParsePathParameters<Path>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ end: string }>();
  });

  it('can extract multiple path parameters', () => {
    // given: a path literal with multiple path parameters
    type Path = ':start/in/:middle/between/:end';
    // when: parsing the path parameters
    type Parameters = ParsePathParameters<Path>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ start: string; middle: string; end: string }>();
  });
});
