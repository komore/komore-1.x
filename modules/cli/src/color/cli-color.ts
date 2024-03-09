import { type CliColorName } from './cli-color-name';

/**
 * Command-line color
 */
export type CliColor = CliColorName | readonly [colorName: CliColorName, variant: 'bright'];
