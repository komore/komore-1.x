# Architecture

- A command is XXX
- A command creator is a function that creates a command object
- A command type defines a set of commands within a same domain, and allows creating each of them
- A command matcher is XXX
- A command handler is XXXX

```ts
import { commandProperties, createCommandType } from '@komore/command';

const commandType = createCommandType(domain, {
  someCommand: commandPropserties<{ param: type }>(),
});

const command = commandType.someCommand({ param });
```
