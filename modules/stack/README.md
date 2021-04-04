# komore Stack

Describe the stack with a DSL / cdktf.

Generate a Terraform module from it.

When doing `nx generate @komore/schematics:stack`, a stack gets created + the ability to nx serve/deploy based on that stack

```ts
export const myStack = createStack(stack => stack.pipe(
  withVariable(')
));
```

TODO:

- stack graph command to show a graph of the infrastructure?
- observability: create cloudwatch alarms or gcp alert policies
