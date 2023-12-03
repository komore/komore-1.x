import { map, throwOnError, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';
import { AwsCliNotFoundError } from './aws-cli-not-found-error';

/**
 * Returns the aws CLI version, if available
 *
 * @param basePath Base path
 * @returns aws CLI version
 */
export function getAwsCliVersion(basePath: string): Observable<string> {
  return executeChildProcess('aws --version', { cwd: basePath }).pipe(
    throwOnError(() => new AwsCliNotFoundError('aws CLI not found')),
    map(output => output.stdout),
    map(stdout => {
      const matches = stdout.match(/aws-cli\/([^\s]+)/) as readonly [matched: string, version: string] | null;
      if (matches === null) {
        throw new AwsCliNotFoundError(`unable to parse aws CLI version "${stdout}"`);
      }

      const [, version] = matches;
      return version;
    })
  );
}
