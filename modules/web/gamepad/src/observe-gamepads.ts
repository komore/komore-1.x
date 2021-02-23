import type { Observable } from '@komore/reactive';
import { fromEvent, merge } from '@komore/reactive';

/**
 * Creates an observable that emits when a gamepad is connected or disconnected
 */
export function observeGamepads(): Observable<GamepadEvent> {
  return merge([
    fromEvent<GamepadEvent>(window, 'gamepadconnected'),
    fromEvent<GamepadEvent>(window, 'gamepaddisconnected')
  ]);
}
