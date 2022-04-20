import { jsonToObject } from '@komore/functional';
import { map, mapEach, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';
import { type AzCliAccount } from './az-cli-account';
import { azCliAccountToAzCliProfile } from './az-cli-account-to-az-cli-profile';
import { type AzCliProfile } from './az-cli-profile';

export function getAzCliProfiles(basePath: string): Observable<ReadonlyArray<AzCliProfile>> {
  return executeChildProcess('az account list --output=json', { cwd: basePath }).pipe(
    map(output => output.stdout),
    map(jsonToObject<ReadonlyArray<AzCliAccount>>()),
    mapEach(azCliAccountToAzCliProfile)
  );
}
