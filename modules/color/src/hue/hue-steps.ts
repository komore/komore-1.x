import { type RGB } from '../rgb/rgb';

/**
 * Hue steps
 */
export const HUE_STEPS: ReadonlyArray<RGB> = [
  { red: 255, green: 0, blue: 0 },
  { red: 255, green: 255, blue: 0 },
  { red: 0, green: 255, blue: 0 },
  { red: 0, green: 255, blue: 255 },
  { red: 0, green: 0, blue: 255 },
  { red: 255, green: 0, blue: 255 },
  { red: 255, green: 0, blue: 0 }
];
