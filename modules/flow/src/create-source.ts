import { of } from '@komore/reactive';
import { Source } from './source';

export function createSource<OutputType>(): Source<OutputType> {
  return of((undefined as any) as OutputType);
}
