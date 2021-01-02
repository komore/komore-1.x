import { fromEvent, merge, Observable } from 'rxjs';

/**
 * Watches for gamepad connections and disconnections
 */
export function watchGamepads(): Observable<GamepadEvent> {
  return merge(
    fromEvent<GamepadEvent>(window, 'gamepadconnected'),
    fromEvent<GamepadEvent>(window, 'gamepaddisconnected')
  );
}
