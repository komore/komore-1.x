# Developer Experience

## Intuitive naming conventions

| Element   | Definition             | Usage                                            |
| :-------- | :--------------------- | :----------------------------------------------- |
| Command   | `createCommandType()`  | `const command = commandType.name(parameters)`   |
| Error     | `createErrorType()`    | `const error = errorType.name(parameters)`       |
| Event     | `createEventType()`    | `const event = eventType.name(parameters)`       |
| Log event | `createLogEventType()` | `const logEvent = logEventType.name(parameters)` |
| Metric    | `createMetricType()`   | `const metric = metricType.name(parameters)`     |
| Query     | `createQueryType()`    | `const query = queryType.name(parameters)`       |

### Domain

```ts
import { createDomain } from '@komore/domain';

const domain = createDomain('domain-name');
```

### Command

```ts
import { commandProperties, createCommandType } from '@komore/command';

const commandType = createCommandType(domain, {
  someCommand: commandPropserties<{ param: type }>(),
});

const command = commandType.someCommand({ param });
```

### Error

### Event

### Log event

### Metric

```ts
import { createMetricType } from '@komore/metrics';
```

## Application

### Command-line application

#### Router

```ts
import { createCliRouter } from '@komore/cli/router';

const router = createCliRouter({
  'some-command --flag=:flagValue': {
    command: ({ flagValue }) => xyzCommand.someCommand({ flagValue }),
  },
});

router(['some-command', '--flag=hello']).pipe(tap(command => console.log('command', command)));
```
