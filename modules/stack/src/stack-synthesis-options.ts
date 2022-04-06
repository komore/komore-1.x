/**
 * Stack synthesis options
 */
export interface StackSynthesisOptions {
  /**
   * Output path
   */
  readonly outputPath: string;
  /**
   * Include stack traces in errors
   */
  readonly stackTrace: boolean;
  /**
   * Watch mode, synthesizing the stack whenever a change occurs
   */
  readonly watch: boolean;
}
