import { map } from '@komore/reactive';

import { type PoetryCliClient } from '../poetry-cli-client';
import { poetryCliVersionOutputToVersion } from './poetry-cli-version-output-to-version';

/**
 * Creates a function that returns the Poetry version
 *
 * @param cliClient Poetry CLI client
 * @returns Function that returns the Poetry version
 */
export function getPoetryVersion(cliClient: PoetryCliClient): () => Observable<string> {
  return () => cliClient(['--version']).pipe(map(poetryCliVersionOutputToVersion));
}
