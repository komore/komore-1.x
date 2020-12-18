import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flow } from './flow';

export function createFlow<InputType, OutputType>(): Flow<InputType, OutputType> {
  return pipe(map(x => (x as any) as OutputType));
}
