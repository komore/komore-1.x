import { ParseUrlQueryParameters } from './parse-url-query-parameters';
import { expectTypeOf } from 'expect-type';

describe('Parse URL query parameters', () => {
  it('does not extract from query strings with no parameters', () => {
    // given: a query string literal with no parameters
    type QueryString = 'q1=value1&q2=value2';
    // when: parsing the query parameters
    type Parameters = ParseUrlQueryParameters<QueryString>;
    // then: the type has no properties
    expectTypeOf<Parameters>().toEqualTypeOf({});
  });

  it('can extract a query parameter at the start of the query string', () => {
    // given: a query string literal with a query parameter at its start
    type QueryString = 'q1=:start&q2=value2';
    // when: parsing the query parameters
    type Parameters = ParseUrlQueryParameters<QueryString>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ start: string }>();
  });

  it('can extract a query parameter at the end of the query string', () => {
    // given: a query string literal with a query parameter at its end
    type QueryString = 'q1=value1&q2=:end';
    // when: parsing the query parameters
    type Parameters = ParseUrlQueryParameters<QueryString>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ end: string }>();
  });

  it('can extract multiple query parameters', () => {
    // given: a query string literal with multiple query parameters
    type QueryString = 'q1=:start&q2=value2&q3=:middle&q4=value&q5=:end';
    // when: parsing the query parameters
    type Parameters = ParseUrlQueryParameters<QueryString>;
    // then: the type has the property
    expectTypeOf<Parameters>().toEqualTypeOf<{ start: string; middle: string; end: string }>();
  });
});
