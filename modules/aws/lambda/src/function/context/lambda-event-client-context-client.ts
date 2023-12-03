/**
 * Lambda event client context client
 */
export interface LambdaEventClientContextClient {
  readonly appPackageName: string;
  readonly appTitle: string;
  readonly appVersionName: string;
  readonly appVersionCode: string;
  readonly installationId: string;
}
