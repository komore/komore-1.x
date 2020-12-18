import { ValidatorOptions } from './validator-options';

/**
 * Validation context
 */
export type ValidationContext = Readonly<{
  validatorOptions: ValidatorOptions;
}>;
