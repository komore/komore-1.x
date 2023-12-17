# @komore/testing

TODO.

- eslint rule: blank line between groups:

  - given:,and:,and: blank
  - when:,and:,and,:and: blank
  - expect:/then:,and:,and: blank
  - where:
  - issue: https://github.com/x/y/issues/###

- jest replacement using code generation for given/when/then/etc
- unit tests: the main goal is to validate and document the behavior of the code
- acceptance tests: the goal is to validate it matches the requirements

## Design

### Supported syntax

```ts
a; // expectTruthy(a)
!a; // expectFalsy(a)
a === undefined; // expectUndefined(a)
a !== undefined; // expectDefined(a)
a === null; // expectNull(a)
a !== null; // expectNotNull(a)
a === b; // expectEqualTo(b)(a)
a !== b; // expectNotEqualTo(b)(a)
a instanceof b; // expectInstanceOf(b)(a)
typeof a === 'b'; // expectTypeOf('b')(a)
a > b; // expectGreaterThan(b)(a)
a >= b; // expectedGreaterThanOrEqualTo(b)(a)
a < b; // expectLessThan(b)(a)
a <= b; // expectedLessThanOrEqualTo(b)(a)
[].includes() // TODO: special display?
[].some() // TODO: special display?
[].every() // TODO: special display?
new Map().has() // TODO: special display?
```

### Generated code

```ts
feature('x', () => {
  scenario('y', () => {
    given: const a = { b: { c: 4 } };
    const x = { y: { z: 5 } };

    then: a.b !== undefined;
    a.b.c === x.y.z;
  });
});
```

Becomes

```ts
then: const τa = a;
const τa_b = τa.b;
try {
  expectDefined(τa_b);
} catch (e) {
  return reportSpecificationException(e, [τa, τa_b]);
}
const τa_b_c = τa_b.c;
const τx = x;
const τx_y = τx.y;
const τx_y_z = τx_y.z;
try {
  expectEqualTo(τx_y_z)(τa_b_c);
} catch (e) {
  return reportSpecificationException(e, [τa, τa_b, τa_b_c], [τx, τx_y, τx_y_z]);
}
```

```text
Condition not satisfied

a.b.c === x.y.z
| | | |   | | |
| | | |   | | 5
| | | |   | [object Object]
| | | |   [object Object]
| | 4 false
| [object Object]
[object Object]
```

## Schematics

### Executors

- merge: merges code coverage from each project (workspace executor)
- publish: publishes code coverage (project or workspace executor; may not be needed when using a GH Action, e.g. [Codecov])
- test: runs tests

Note: supported file formats for codecoverage: xml & gcov?

### Generators

- code-coverage: adds code coverage reporting to the GH workflow (e.g. [Codecov])
- feature: creates a \*.spec.ts file

[codecov]: https://github.com/marketplace/actions/codecov
