import { not } from '@komore/functional';
import { isEmptyString, stringToLines } from '@komore/string';

import { type AwsCliConfig } from './aws-cli-config';
import { awsCliConfigLinesToConfigSections } from './section/aws-cli-config-lines-to-config-sections';
import { awsCliConfigSectionsToConfig } from './section/aws-cli-config-sections-to-config';

export function parseAwsCliConfigFileContent(content: string): AwsCliConfig {
  const lines = stringToLines()(content);
  const initialConfig: AwsCliConfig = {
    profiles: [],
    ssoSessions: [],
  };
  return lines
    .filter(not(isEmptyString))
    .reduce(awsCliConfigLinesToConfigSections(), [])
    .reduce(awsCliConfigSectionsToConfig, initialConfig);
}
