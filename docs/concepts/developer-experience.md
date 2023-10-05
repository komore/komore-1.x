# Developer Experience

## Intuitive naming conventions

### Domain

```ts
import { createDomain } from '@komore/domain';

const domain = createDomain('domain-name');
```

### Command

```ts
import { commandProps, createCommandGroup } from '@komore/command';

const commandGroup = createCommandGroup(domain, {
  'command.id': commandProps<{ param: type }>(),
});

const command = commandGroup('command.id', { param });

send(command);
```

### Error

### Event

### Log Record

### Metric

```ts
import { createMetricGroup } from '@komore/metrics';
```

| Element    | Definition            | Usage                                           |
| :--------- | :-------------------- | :---------------------------------------------- |
| Error      | `createErrorGroup()`  | `const error = errorGroup('id', parameters)`    |
| Event      | `createEventGroup()`  | `const event = eventGroup('id', parameters)`    |
| Log record | `createLogGroup()`    | `const logEntry = logGroup('id', parameters)`   |
| Measure?   | `createMetricGroup()` | `const measure = metricGroup('id', parameters)` |
