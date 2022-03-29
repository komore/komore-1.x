# komore Visual Studo Code Extension

- [Elements](#elements)
- [Reactive](#reactive)
- [Unit tests](#unit-tests)

## Modules

- indicate whether a type or function is a public API (exported via main) + color indicating type or value

## Elements

- applies to *.element.ts
- auto-completion inside the HTML parts of the template
  - .* shows properties for the element
  - <* shows known custom elements (and auto imports)
  - class="* shows known available matching classes
  - etc.
- hovering over an element shows its documentation
- extra icon on the side showing CSS information
- ctrl+click an element goes to its .ts
- ability to run storybooks directly from an *.element.ts

## Reactive

- hovering over a pipe shows its observable.rocks representation
- allow editing directly from the graph view
- option to open the graph view to the side similar to markdown preview

## Unit tests

- applies to *.spec.ts with at least one of given/when/and/then/expect/where
- Highlight for given:, when:, and:, then:, expect:
- handle thrown() blocks turning the test block into a try { } catch { }
- Hover over test first line => show the BDD-style documentation
- where: generate code

```ts
it('$id1 + $id2 + $id3 = $result', (id1, id2, id3, result) => {
  expect: 'math';
  expect(id1 + id2 + id3).toBe(result);
  where: 'description';
  id1  | id2  | id3  || result;
  val1 | val2 | val3 || val4;
});
```

Becomes

```ts
it.each([
  [{ id1: val1, id2: val2, id3: val3, id4: val4 }]
])('$id1 + $id2 + $id3 = $result' => ({ identifier1, identifier2, identifier3, identifier4 }) => {
  expect: 'math';
  expect(id1 + id2 + id3).toBe(result);
});
```
