# @komore/stack

Describe the stack with a DSL / cdktf.

Generate Terraform modules from it.

When doing `k generate @komore/schematics:stack`, a stack gets created + the ability to `k serve` and `k deploy` based
on that stack.

```ts
import { createStack, withVariable } from '@komore/stack';

export const myStack = createStack(stack => stack.pipe(
  withVariable('')
));
```

TODO:

- stack graph command to show a graph of the infrastructure?
- observability: create cloudwatch alarms or gcp alert policies
