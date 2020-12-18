import { of } from 'rxjs';
import { Source } from './source';

export function createSource<OutputType>(): Source<OutputType> {
  return of((undefined as any) as OutputType);
}
