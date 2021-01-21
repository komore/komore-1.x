import type { ParsedSource } from '@komore/element/parser';
import type { Observable } from 'rxjs';
import type { ProcessedSource } from './processed-source';

/**
 * Processes a source
 * @param parsedSource Parsed source
 * @returns Processed source
 */
export function processSource(parsedSource: ParsedSource): Observable<ProcessedSource> {

}
