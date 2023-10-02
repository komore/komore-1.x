import { firstValueFrom, of, throwError } from '@komore/reactive';
import { feature } from '@komore/testing';
jest.mock('@komore/node');
import { executeChildProcess } from '@komore/node';
import { getTerraformVersion } from './get-terraform-version';
import { type TerraformVersionJson } from './terraform-version-json';

feature('Get Terraform version', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;

  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  it('returns the Terraform version', async () => {
    given: 'an available terraform version -json command';
    const isOutdated = false;
    const platform = 'windows_amd64';
    const version = '1.3.9';
    const terraformVersionJson: TerraformVersionJson = {
      platform,
      provider_selections: {},
      terraform_outdated: isOutdated,
      terraform_version: version,
    };
    mockExecuteChildProcess.mockImplementationOnce(() =>
      of({
        stdout: JSON.stringify(terraformVersionJson, undefined, 2),
        stderr: '',
      })
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the Terraform version';
    const terraformVersion$ = getTerraformVersion(cwd);
    const terraformVersion = await firstValueFrom(terraformVersion$);

    then: 'the correct version details are returned';
    terraformVersion.isOutdated === isOutdated;
    terraformVersion.platform === platform;
    // TODO: test providers
    terraformVersion.version === version;
    mockExecuteChildProcess.calls.length === 1;
    mockExecuteChildProcess.calls[0] === ['terraform version -json', { cwd }];
  });

  it('fails when Terraform is not available', async () => {
    given: 'an unavailable terraform --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the Terraform version details';
    const terraformVersionDetails = getTerraformVersion(cwd);

    then: 'an error is thrown';
    // TODO: with @komore/testing
    // const e = thrown(TerraformNotFoundError); or const e = thrown('TerraformNotFoundError');
    // e.message === 'terraform command-line execution failed';
    // NOTE: a mocked function should be cast as to always return a number once inside a then: block?
    // 1 * mockExecuteChildProcess('terraform --version', { cwd });
    expect(() => firstValueFrom(terraformVersionDetails)).rejects.toThrowError(
      'terraform command-line execution failed'
    );
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('terraform version -json', { cwd });
  });
});
