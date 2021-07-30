# Configuration

```ts
import type { ElementCompilerConfigurator } from '@komore/element/compiler';
import { markdownProcessor } from '@komore/element-compiler-markdown';
import { scssProcessor } from '@komore/element-compiler-scss';
import { customProcessor } from './a/b/c';

export default const _: ElementCompilerConfiguration = configuration$ => configuration$.pipe(
  withProcessor(markdownProcessor),
  withProcessor(scssProcessor),
  withProcessor(customProcessor)
);
```

1. Match the module with package.json
2. Fallback to a path
3. If the path points to TypeScript, build first (must have a local tsconfig.json)
