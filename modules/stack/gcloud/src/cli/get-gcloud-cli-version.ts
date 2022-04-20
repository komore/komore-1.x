import { jsonToObject } from '@komore/functional';
import { map, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';
import { type GcloudCliVersionDetails } from './gcloud-cli-version-details';

export function getGcloudCliVersion(basePath: string): Observable<string> {
  return executeChildProcess('gcloud version --format=json', { cwd: basePath }).pipe(
    map(output => output.stdout),
    map(jsonToObject<GcloudCliVersionDetails>()),
    map(versionDetails => versionDetails['Google Cloud SDK'])
  );
}
