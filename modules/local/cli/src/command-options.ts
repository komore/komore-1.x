import type { args, flags } from '@oclif/parser';

/**
 * Command options
 * @template Arguments Arguments
 * @template Flags Flags
 */
export interface CommandOptions<Arguments extends Record<string, unknown>, Flags extends Record<string, unknown>> {
  readonly args?: ReadonlyArray<args.IArg<unknown>>;
  readonly flags?: {
    readonly [K in keyof Flags]: flags.IFlag<Flags[K]>;
  };
  readonly strict?: boolean;
}
