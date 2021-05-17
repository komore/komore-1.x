/**
 * Vibration observer options
 */
export interface VibrationObserverOptions {
  /**
   * The conditions for vibration to stop
   *
   * By default, vibration stops when the observer receives an error (`error`)
   */
   readonly stopOn?: 'complete' | 'error' | 'complete-and-error';
}
