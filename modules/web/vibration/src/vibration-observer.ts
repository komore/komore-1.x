import { Observer } from 'rxjs';
import { VibrationObserverOptions } from './vibration-observer-options';

/**
 * Vibration observer
 */
export class VibrationObserver implements Observer<number | ReadonlyArray<number>> {
  /**
   * Class constructor
   * @param options Vibration observer options
   */
  constructor(private readonly options: VibrationObserverOptions) {}

  /**
   * Callback triggered upon stream emission
   * @param value Vibration duration or list of vibration intervals, in milliseconds
   */
  next(value: number | ReadonlyArray<number>): void {
    navigator.vibrate?.(value as number | Array<number>);
  }

  /**
   * Callback triggered upon stream error
   */
  error(): void {
    if (this.options.stopOnError) {
      navigator.vibrate?.(0);
    }
  }

  /**
   * Callback triggered upon stream completion
   */
  complete(): void {
    if (this.options.stopOnComplete) {
      navigator.vibrate?.(0);
    }
  }
}
