import { type CliFlag } from './cli-flag';

/**
 * Creates a CLI help flag
 *
 * @param options Options
 * @returns CLI help flag
 */
export function createHelpCliFlag(options?: Partial<CliFlag<'void'>>): CliFlag<'void'> {
  return {
    character: 'h',
    description: 'Print the CLI flags',
    type: 'void',
    ...options,
  };
}
