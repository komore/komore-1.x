import { expectTypeOf } from 'expect-type';
import type { ElementAttributeSubject } from './element-attribute-subject';
import type { ElementAttributeSubjectMap } from './element-attribute-subject-map';

describe('Element attribute subject map', () => {
  it('defines a record where attributes map to a matching attribute subject', () => {
    // given: an element attribute map
    interface TestElementAttributeMap {
      'test-attr-1': string;
      'test-attr-2': number;
      'test-attr-3': boolean | undefined;
    }
    // when: defining an element attribute subject map
    type TestElementAttributeSubjectMap = ElementAttributeSubjectMap<TestElementAttributeMap>;
    // then: each attribute type is mapped to a matching attribute subject
    type ExpectedAttributeSubjectMapType = Readonly<{
      'test-attr-1': ElementAttributeSubject<string>;
      'test-attr-2': ElementAttributeSubject<number>;
      'test-attr-3': ElementAttributeSubject<boolean | undefined>;
    }>;
    expectTypeOf<TestElementAttributeSubjectMap>().toEqualTypeOf<ExpectedAttributeSubjectMapType>();
  });
});
