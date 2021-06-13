/**
 * Function environment
 */
export interface FunctionEnvironment {
  /**
   * Function name
   */
  readonly functionName: string;
  /**
   * Function version
   */
  readonly functionVersion: string;
  /**
   * Available memory, in MiB
   */
  readonly memorySize: number;
  /**
   * Region
   */
  readonly region: string;
  /**
   * Environment type
   */
  readonly type: string;
}
