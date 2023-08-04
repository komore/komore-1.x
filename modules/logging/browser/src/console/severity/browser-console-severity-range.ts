/**
 * Browser console severity range
 */
export interface BrowserConsoleSeverityRange {
  readonly max?: number;
  readonly min?: number;
  readonly severity: 'debug' | 'log' | 'info' | 'warn' | 'error';
}
