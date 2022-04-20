import { type RGBColor } from '../rgb/rgb-color';

export function rgbColorToSaturationPercentage(color: RGBColor): number {
  const r = color.red / 255;
  const g = color.green / 255;
  const b = color.blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return (max - min) / max;
}
