import { firstValueFrom, of, throwError } from '@komore/reactive';
jest.mock('@komore/runtime/node');
import { executeChildProcess } from '@komore/runtime/node';
import { getTerraformVersionDetails } from './get-terraform-version-details';
import { type TerraformVersionDetails } from './terraform-version-details';

describe('Get Terraform version details', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;

  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  it('returns the Terraform version details', async () => {
    given: 'an available terraform version -json command';
    const mockVersionDetails: TerraformVersionDetails = {
      platform: 'windows_amd64',
      provider_selections: {},
      terraform_outdated: false,
      terraform_version: '1.2.3',
    };
    mockExecuteChildProcess.mockImplementationOnce(() =>
      of({
        stdout: JSON.stringify(mockVersionDetails, undefined, 2),
        stderr: '',
      })
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the Terraform version details';
    const terraformVersionDetails$ = getTerraformVersionDetails(cwd);
    const terraformVersionDetails = await firstValueFrom(terraformVersionDetails$);

    then: 'the correct version details are returned';
    expect(terraformVersionDetails.platform).toBe(mockVersionDetails.platform);
    expect(terraformVersionDetails.terraform_outdated).toBe(mockVersionDetails.terraform_outdated);
    expect(terraformVersionDetails.terraform_version).toBe('1.2.3');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('terraform version -json', { cwd });
  });

  it('fails when Terraform is not available', async () => {
    given: 'an unavailable terraform --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the Terraform version details';
    const terraformVersionDetails = getTerraformVersionDetails(cwd);

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
