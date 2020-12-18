import { ParsePayloadParameters } from './parse-payload-parameters';
import { expectTypeOf } from 'expect-type';

describe('Parse payload parameters', () => {
  it('does not extract from an extra specification with no payload parameters', () => {
    // given: an extra specification literal with no parameters
    type ExtraSpecification = 'h=value1&_=payload';
    // when: parsing the header parameters
    type PayloadParameters = ParsePayloadParameters<ExtraSpecification>;
    // then: the type has no properties
    expectTypeOf<PayloadParameters>().toEqualTypeOf({});
  });

  it('can extract a payload parameter at the start of the extra specification', () => {
    // given: an extra specification literal with a payload parameter at its start
    type ExtraSpecification = '_=:start&h2=value2';
    // when: parsing the header parameters
    type PayloadParameters = ParsePayloadParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<PayloadParameters>().toEqualTypeOf<{ start: unknown; }>();
  });

  it('can extract a payload parameter at the end of the extra specification', () => {
    // given: an extra specification literal with a payload parameter at its end
    type ExtraSpecification = 'h1=value1&_=:end';
    // when: parsing the header parameters
    type PayloadParameters = ParsePayloadParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<PayloadParameters>().toEqualTypeOf<{ end: unknown; }>();
  });

  it('can extract a payload parameter in the middle of the extra specification', () => {
    // given: an extra specification literal with a payload parameter in the middle
    type ExtraSpecification = 'h1=value1&_=:middle&h2=value2';
    // when: parsing the header parameters
    type PayloadParameters = ParsePayloadParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<PayloadParameters>().toEqualTypeOf<{ middle: unknown; }>();
  });

  it('does not extract a header parameter', () => {
    // given: an extra specification literal with multiple header parameters and a payload parameter
    type ExtraSpecification = 'h1=:h1&_:payload&h2=:h2';
    // when: parsing the payload parameters
    type PayloadParameters = ParsePayloadParameters<ExtraSpecification>;
    // then: the type has the property
    expectTypeOf<PayloadParameters>().toEqualTypeOf<{ payload: unknown; }>();
  });
});
