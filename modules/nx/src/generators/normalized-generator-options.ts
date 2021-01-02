import { BaseGeneratorOptions } from './base-generator-options';

/**
 * Normalized generator options
 * @template GeneratorOptionsType Generator options type
 */
export type NormalizedGeneratorOptions<GeneratorOptionsType extends BaseGeneratorOptions> = Readonly<
  {
    projectName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: ReadonlyArray<string>;
    sourceRoot: string;
  } & GeneratorOptionsType
>;
