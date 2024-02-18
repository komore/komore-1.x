import { executeChildProcess } from '@komore/node/process';
import { firstValueFrom, of, throwError } from '@komore/reactive';
import { feature, thrown } from '@komore/testing';

import { openTofuCliError } from '../opentofu-cli.error';
import { getOpenTofuVersion } from './get-opentofu-version';
import { type OpenTofuVersionJson } from './opentofu-version-json';

feature('Get OpenTofu version', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;

  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  return {
    async 'returns the OpenTofu version'() {
      given: 'an available opentofu version -json command';
      const isOutdated = false;
      const platform = 'windows_amd64';
      const version = '1.3.9';
      const opentofuVersionJson: OpenTofuVersionJson = {
        platform,
        provider_selections: {},
        terraform_outdated: isOutdated,
        terraform_version: version,
      };
      mockExecuteChildProcess.mockImplementationOnce(() =>
        of({
          stdout: JSON.stringify(opentofuVersionJson, undefined, 2),
          stderr: '',
        })
      );
      and: 'a current working directory';
      const cwd = '.';

      when: 'getting the OpenTofu version';
      const opentofuVersion$ = getOpenTofuVersion(cwd);
      const opentofuVersion = await firstValueFrom(opentofuVersion$);

      then: 'the correct version details are returned';
      opentofuVersion.isOutdated === isOutdated;
      opentofuVersion.platform === platform;
      // TODO: test providers
      opentofuVersion.version === version;
      mockExecuteChildProcess.calls.length === 1;
      mockExecuteChildProcess.calls[0] === ['opentofu version -json', { cwd }];
    },
    async 'fails when OpenTofu is not available'() {
      given: 'an unavailable opentofu --version command';
      mockExecuteChildProcess.mockImplementationOnce(command =>
        throwError(() => new Error(`Command failed: ${command}`))
      );
      and: 'a current working directory';
      const cwd = '.';

      when: 'getting the OpenTofu version details';
      const openTofuVersion$ = getOpenTofuVersion(cwd);
      await firstValueFrom(openTofuVersion$);

      then: 'an error is thrown';
      thrown(openTofuCliError.notFound);
      1 * mockExecuteChildProcess('opentofu version -json', { cwd });
    },
  };
});
