/**
 * Lambda event client context environment
 */
export interface LambdaEventClientContextEnv {
  readonly locale: string;
  readonly make: string;
  readonly model: string;
  readonly platform: string;
  readonly platformVersion: string;
}
