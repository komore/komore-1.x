import { fromEvent, merge } from 'rxjs';

export const watchGamepads = () =>
  merge(fromEvent<GamepadEvent>(window, 'gamepadconnected'), fromEvent<GamepadEvent>(window, 'gamepaddisconnected'));
