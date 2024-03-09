import { type StringToStyledCliTextOptions } from './string-to-styled-cli-text-options';

/**
 * Creates a function that returns styled command-line text, given a string
 *
 * @param styledTextOptions Styled text options
 * @returns Function that returns styled command-line text, given a string
 */
export function stringToStyledText(styledTextOptions: StringToStyledCliTextOptions): (value: string) => string {
  const { color, background, style = [] } = styledTextOptions;
  color;
  background;
  style;
  const applyStyle = (value: string) => value;
  return applyStyle;
}
