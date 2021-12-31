import { type AngleUnit } from '../unit/angle-unit';
import { type LengthUnit } from '../unit/length-unit';
import { type ResolutionUnit } from '../unit/resolution-unit';
import { type TimeUnit } from '../unit/time-unit';

/**
 * Known property syntaxes
 */
export interface KnownPropertySyntaxes {
  /**
   * Value that represents an angle
   */
  '<angle>': `${number}${AngleUnit}`;
  /**
   * Value that represents a color
   */
  '<color>': string;
  /**
   * Value that represents a custom identifier
   */
  '<custom-ident>': string;
  /**
   * Value that represents an image
   */
  '<image>': string;
  /**
   * Value that represents an integer number
   */
  '<integer>': number;
  /**
   * Value that represents a distance
   */
  '<length>': `${number}${LengthUnit}`;
  /**
   * Value that represents either a <length> or a <percentage>
   */
  '<length-percentage>': `${number}${LengthUnit | '%'}`;
  /**
   * Value that represents a real number
   */
  '<number>': number;
  /**
   * Value that represents a percentage
   */
  '<percentage>': `${number}%`;
  /**
   * Value that represents a resolution
   */
  '<resolution>': `${number}${ResolutionUnit}`;
  /**
   * Value that represents a duration
   */
  '<time>': `${number}${TimeUnit}`;
  /**
   * Value that represents a transform function
   */
  '<transform-function>': string;
  /**
   * Value that represents a list of transform functions
   */
  '<transform-list>': string;
  /**
   * Value that represents a URL
   */
  '<url>': string;
}
