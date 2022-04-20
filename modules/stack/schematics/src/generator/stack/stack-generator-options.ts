/**
 * Stack generator options
 */
export interface StackGeneratorOptions {
  readonly infrastructure: ReadonlyArray<'aws' | 'azure' | 'gcp'>;
}
