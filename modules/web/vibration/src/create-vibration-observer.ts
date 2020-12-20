import { Observer } from 'rxjs';
import { VibrationObserver } from './vibration-observer';
import { VibrationObserverOptions } from './vibration-observer-options';

/**
 * Creates a vibration observer
 * @returns Vibration observer
 * @note Vibrations are ignored when the API is not available
 */
export function createVibrationObserver(
  options?: Partial<VibrationObserverOptions>
): Observer<number | ReadonlyArray<number>> {
  return new VibrationObserver({
    stopOnComplete: options?.stopOnComplete ?? false,
    stopOnError: options?.stopOnError ?? true
  });
}
