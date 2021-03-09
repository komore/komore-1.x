import type { Observer } from '@komore/reactive';
import { VibrationObserver } from './vibration-observer';
import type { VibrationObserverOptions } from './vibration-observer-options';

/**
 * Creates a vibration observer
 * @returns Vibration observer
 * @note Vibrations are ignored when the API is not available
 */
export function createVibrationObserver(
  options?: Partial<VibrationObserverOptions>
): Observer<number | ReadonlyArray<number>> {
  const observerOptions: VibrationObserverOptions = {
    stopOnComplete: options?.stopOnComplete ?? false,
    stopOnError: options?.stopOnError ?? true
  };

  return new VibrationObserver(observerOptions);
}
