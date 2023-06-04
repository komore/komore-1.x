# @komore/testing

TODO.

- eslint rule: blank line between groups:

  - given:,and:,and: blank
  - when:,and:,and,:and: blank
  - expect:/then:,and:,and: blank
  - where:
  - issue: https://github.com/x/y/issues/###

- jest replacement using code generation for given/when/then/etc?

  - maintain jest compatibility?

- unit tests: the main goal is to validate and document the behavior of the code
- acceptance tests: the goal is to validate it matches the requirements

## Design

### Supported syntax

```ts
a; // expectTruthy(a)         expect(a).toBeTruthy()
!a; // expectFalsy(a)          expect(a).toBeFalsy()
a === undefined; // expectUndefined(a)      expect(a).toBeUndefined()
a !== undefined; // expectDefined(a)        expect(a).toBeDefined()
a === null; // expectNull(a)           expect(a).toBeNull()
a === b; // expectEqual(a)(b)       expect(a).toBe(b)
a !== b; // expectNotEqual(a)(b)    expect(a).not.toBe(b)
a !== null; // expectNotNull(a)        expect(a).not.toBeNull()
a instanceof b; // expectInstanceOf(a, b)  expect(a).toBeInstanceOf(b)
typeof a === 'b'; // expectTypeOf(a, 'b')
```

### Generated code

```ts
feature('x', () => {
  scenario('y', () => {
    // vars here
    given: then: a.b !== undefined;
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
  expectEqual(τa_b_c, τx_y_z);
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
