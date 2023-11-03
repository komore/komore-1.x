import { firstValueFrom, of, throwError } from '@komore/reactive';
import { feature } from '@komore/testing';

import { executeChildProcess } from '@komore/node';
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

  it('returns the OpenTofu version', async () => {
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
  });

  it('fails when OpenTofu is not available', async () => {
    given: 'an unavailable opentofu --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the OpenTofu version details';
    const opentofuVersionDetails = getOpenTofuVersion(cwd);

    then: 'an error is thrown';
    // TODO: with @komore/testing
    // const e = thrown(OpenTofuNotFoundError); or const e = thrown('OpenTofuNotFoundError');
    // e.message === 'opentofu command-line execution failed';
    // NOTE: a mocked function should be cast as to always return a number once inside a then: block?
    // 1 * mockExecuteChildProcess('opentofu --version', { cwd });
    expect(() => firstValueFrom(opentofuVersionDetails)).rejects.toThrowError('opentofu command-line execution failed');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('opentofu version -json', { cwd });
  });
});
