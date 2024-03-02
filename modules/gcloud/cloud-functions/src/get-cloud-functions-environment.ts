import { asGcloudRegion, type GcloudRegion } from '@komore/gcloud';
import { type FunctionEnvironment } from '@komore/function';
import { getNodeEnvironmentVariables } from '@komore/node/environment';

/**
 * Returns the Cloud Functions environment
 *
 * @returns Cloud Functions environment
 */
export function getLambdaEnvironment(): FunctionEnvironment<typeof environmentType, GcloudRegion> {
  return {
    ...getNodeEnvironmentVariables(process.env, {
      functionName: {
        description: 'Cloud Functions function name',
        name: 'K_SERVICE',
      },
      functionVersion: {
        description: 'Cloud Functions function version',
        name: 'K_REVISION',
      },
      memorySize: {
        description: 'Available memory',
        name: 'KMR_FUNCTION_MEMORY',
        parse: Number,
      },
      region: {
        description: 'Google Cloud region where the function is executing',
        name: 'KMR_REGION',
        parse: asGcloudRegion,
      },
    }),
    type: environmentType,
  };
}

const environmentType = 'gcloud:cloud-functions';
