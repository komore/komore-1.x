import { expectTypeOf } from 'expect-type';
import { BehaviorSubject } from 'rxjs';
import { ElementAttributeSubjectMap } from './element-attribute-subject-map';

describe('Element attribute subject map', () => {
  it('Define a record where ', () => {
    // given: an element attribute map
    interface TestElementAttributeMap {
      'test-attr-1': string;
      'test-attr-2': number;
      'test-attr-3': boolean | undefined;
    }
    // when: defining an element attribute subject map
    type TestElementAttributeSubjectMap = ElementAttributeSubjectMap<TestElementAttributeMap>;
    // then: each attribute type is mapped to an equivalent behavior subject
    type ExpectedAttributeSubjectMapType = Readonly<{
      'test-attr-1': BehaviorSubject<string>;
      'test-attr-2': BehaviorSubject<number>;
      'test-attr-3': BehaviorSubject<boolean | undefined>;
    }>;
    expectTypeOf<TestElementAttributeSubjectMap>().toEqualTypeOf<ExpectedAttributeSubjectMapType>();
  });
});
