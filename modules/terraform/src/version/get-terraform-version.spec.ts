import { executeChildProcess } from '@komore/node/process';
import { firstValueFrom, of, throwError } from '@komore/reactive';
import { feature, thrown } from '@komore/testing';

import { terraformCliError } from '../terraform-cli.error';
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

  return {
    async 'returns the Terraform version'() {
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
    },
    async 'fails when Terraform is not available'() {
      given: 'an unavailable terraform --version command';
      mockExecuteChildProcess.mockImplementationOnce(command =>
        throwError(() => new Error(`Command failed: ${command}`))
      );
      and: 'a current working directory';
      const cwd = '.';

      when: 'getting the Terraform version details';
      const terraformVersion$ = getTerraformVersion(cwd);
      await firstValueFrom(terraformVersion$);

      then: 'an error is thrown';
      thrown(terraformCliError.notFound);
      1 * mockExecuteChildProcess('terraform version -json', { cwd });
    },
  };
});
