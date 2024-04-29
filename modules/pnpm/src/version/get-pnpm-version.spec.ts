import { firstValueFrom } from '@komore/reactive';
import { feature, mock, thrown } from '@komore/testing';

import { type PnpmCliClient } from '../pnpm-cli-client';
import { pnpmCliError } from '../pnpm-cli.error';
import { getPnpmVersion } from './get-pnpm-version';

feature('Get pnpm version', {
  async 'returns the pnpm version'() {
    given: 'a pnpm command-line interface client';
    const expectedVersion = '6.7.8';
    const cliClient = mock<PnpmCliClient>().mockObservedValue(expectedVersion);

    when: 'creating a function that returns the pnpm version';
    const func = getPnpmVersion(cliClient);
    and: 'calling it';
    const pnpmVersion$ = func();
    const pnpmVersion = await firstValueFrom(pnpmVersion$);

    then: 'the correct version is returned';
    pnpmVersion === expectedVersion;
    cliClient.invocations.length === 1;
    cliClient.invocations[0]?.parameters[0] === ['--version'];
  },

  async 'fails when pnpm is not available'() {
    given: 'a pnpm command-line interface client that cannot find pnpm';
    const expectedError = pnpmCliError.notFound();
    const cliClient = mock<PnpmCliClient>().mockObservedError(expectedError);

    when: 'creating a function that returns the pnpm version';
    const func = getPnpmVersion(cliClient);
    and: 'calling it';
    const pnpmVersion$ = func();
    await firstValueFrom(pnpmVersion$);

    then: 'an error is thrown';
    const error = thrown(pnpmCliError.notFound);
    error === expectedError;
  },
});
