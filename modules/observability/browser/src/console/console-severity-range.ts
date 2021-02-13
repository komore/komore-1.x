/**
 * Console severity range
 */
export interface ConsoleSeverityRange {
  readonly max?: number;
  readonly min?: number;
  readonly severity: 'debug' | 'log' | 'info' | 'warn' | 'error';
}
