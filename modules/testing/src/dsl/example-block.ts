/**
 * Example block
 */
export interface ExampleBlock {
  (): void | Observable<void> | Promise<void>;
}
