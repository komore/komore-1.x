import type { ParsedSource } from '@komore/element/parser';
import type { Observable } from '@komore/reactive';
import type { ProcessedSource } from './processed-source';

/**
 * Processes a source
 * @param parsedSource Parsed source
 * @returns Processed source
 */
export function processSource(parsedSource: ParsedSource): Observable<ProcessedSource> {
  
  parsedSource.scriptElements
}
