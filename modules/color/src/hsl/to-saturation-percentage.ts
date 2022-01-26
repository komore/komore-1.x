import { type HSL } from './hsl';

export function toSaturationPercentage(color: HSL): number {
  const r = color.red / 255,
    g = color.g / 255,
    b = color.b / 255,
    s = (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);

  return s;
}
