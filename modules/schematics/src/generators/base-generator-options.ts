/**
 * Base generator options
 */
export interface BaseGeneratorOptions {
  readonly directory?: string;
  readonly domain?: string;
  readonly name: string;
  readonly tags?: string;
}
