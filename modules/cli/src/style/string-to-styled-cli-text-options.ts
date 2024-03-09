import { type CliColor } from '../color/cli-color';
import { type CliTextStyle } from './cli-text-style';

/**
 * String to styled command-line interface text options
 */
export interface StringToStyledCliTextOptions {
  /**
   * Background
   */
  readonly background?: CliColor;
  /**
   * Color
   */
  readonly color?: CliColor;
  /**
   * Style
   */
  readonly style?: ReadonlyArray<CliTextStyle>;
}
