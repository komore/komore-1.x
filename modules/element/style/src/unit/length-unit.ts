import { type AbsoluteLengthUnit } from './absolute-length-unit';
import { type FontRelativeLengthUnit } from './font-relative-length-unit';
import { type ViewportPercentageLengthUnit } from './viewport-percentage-length-unit';

/**
 * Length unit
 */
export type LengthUnit = AbsoluteLengthUnit | FontRelativeLengthUnit | ViewportPercentageLengthUnit;
