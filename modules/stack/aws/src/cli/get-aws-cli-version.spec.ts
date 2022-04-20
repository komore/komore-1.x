import { firstValueFrom } from '@komore/reactive';
import { getAwsCliVersion } from './get-aws-cli-version';

describe('Get aws CLI version', () => {
  it('returns the aws CLI version', async () => {
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the aws version';
    const awsCliVersion$ = getAwsCliVersion(cwd);
    const awsCliVersion = await firstValueFrom(awsCliVersion$);

    then: 'the correct version is returned';
    expect(awsCliVersion).toBe('6.7.8');
    //expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    //expect(mockExecuteChildProcess).toHaveBeenCalledWith('aws --version', { cwd });
  });
});
