/**
 * Function environment
 *
 * @template EnvironmentType Environment type
 * @template RegionType Region type
 */
export interface FunctionEnvironment<EnvironmentType extends string = string, RegionType extends string = string> {
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
  readonly region: RegionType;
  /**
   * Environment type
   */
  readonly type: EnvironmentType;
}
