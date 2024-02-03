import { jsonToObject } from '@komore/json';
import { executeChildProcess } from '@komore/node/process';
import { map } from '@komore/reactive';

import { type GcloudCliVersionDetails } from './gcloud-cli-version-details';

export function getGcloudCliVersion(basePath: string): Observable<string> {
  return executeChildProcess('gcloud version --format=json', { cwd: basePath }).pipe(
    map(output => output.stdout),
    map(jsonToObject<GcloudCliVersionDetails>()),
    map(versionDetails => versionDetails['Google Cloud SDK'])
  );
}
