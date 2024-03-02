import { readFileContent } from '@komore/node/file-system';
import { map, mergeMap } from '@komore/reactive';

import { type AwsCliConfig } from './aws-cli-config';
import { getAwsCliConfigPath } from './get-aws-cli-config-path';
import { parseAwsCliConfigFileContent } from './parse-aws-cli-config-file-content';

/**
 * Returns the AWS CLI configuration
 *
 * @returns AWS CLI configuration
 */
export function getAwsCliConfig(): Observable<AwsCliConfig> {
  return getAwsCliConfigPath().pipe(
    mergeMap(configPath => readFileContent(configPath, { encoding: 'utf-8' })),
    map(parseAwsCliConfigFileContent)
  );
}
