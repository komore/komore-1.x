import { type ParsedSource } from '@komore/element/parser';
import { forkJoin, type Observable } from '@komore/reactive';
import { type ProcessedSource } from './processed-source';

export function toProcessedSource(): (parsedSource: ParsedSource) => Observable<ProcessedSource> {
    
  return parsedSource => forkJoin({
    styleElements: parsedSource.styleElements.
  }).pipe(
    
  );
}
