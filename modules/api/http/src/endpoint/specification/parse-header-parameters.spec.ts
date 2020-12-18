import { ParseHeaderParameters } from './parse-header-parameters';
import { expectTypeOf } from 'expect-type';

describe('Parse header parameters', () => {
  it('does not extract from an extra specification with no header parameters', () => {
    // given: an extra specification literal with no parameters
    type ExtraSpecification = 'h1=value1&h2=value2';
    // when: parsing the header parameters
    type HeaderParameters = ParseHeaderParameters<ExtraSpecification>;
    // then: the type has no properties
    expectTypeOf<HeaderParameters>().toEqualTypeOf({});
  });

  it('can extract a header parameter at the start of the extra specification', () => {
    // given: an extra specification literal with a header parameter at its start
    type ExtraSpecification = 'h1=:start&h2=value2';
    // when: parsing the header parameters
    type HeaderParameters = ParseHeaderParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<HeaderParameters>().toEqualTypeOf<{ start: string }>();
  });

  it('can extract a header parameter at the end of the extra specification', () => {
    // given: an extra specification literal with a header parameter at its end
    type ExtraSpecification = 'h1=value1&h2=:end';
    // when: parsing the header parameters
    type HeaderParameters = ParseHeaderParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<HeaderParameters>().toEqualTypeOf<{ end: string }>();
  });

  it('can extract multiple header parameters', () => {
    // given: an extra specification literal with multiple header parameters
    type ExtraSpecification = 'h1=:start&h2=value2&h3=:middle&h4=value&h5=:end';
    // when: parsing the header parameters
    type HeaderParameters = ParseHeaderParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<HeaderParameters>().toEqualTypeOf<{ start: string; middle: string; end: string }>();
  });

  it('does not extract a payload parameter', () => {
    // given: an extra specification literal with multiple header parameters and a payload parameter
    type ExtraSpecification = 'h1=:start&h2=value2&h3=:middle&_=:payload&h5=:end';
    // when: parsing the header parameters
    type HeaderParameters = ParseHeaderParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<HeaderParameters>().toEqualTypeOf<{ start: string; middle: string; end: string }>();
  });
});
