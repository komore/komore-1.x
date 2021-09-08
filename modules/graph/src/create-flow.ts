import { map, pipe } from '@komore/reactive/operators';
import type { Flow } from './flow';

export function createFlow<InputType, OutputType>(): Flow<InputType, OutputType> {
  return pipe(map(x => (x as unknown) as OutputType));
}
