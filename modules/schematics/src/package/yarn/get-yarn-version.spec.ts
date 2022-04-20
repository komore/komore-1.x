import { firstValueFrom, of, throwError } from '@komore/reactive';
jest.mock('@komore/runtime/node');
import { executeChildProcess } from '@komore/runtime/node';
import { getYarnVersion } from './get-yarn-version';

describe('Get Yarn version', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;
  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  it('returns the Yarn version', async () => {
    given: 'an available yarn --version command';
    mockExecuteChildProcess.mockImplementationOnce(() => {
      return of({
        stdout: '1.23.4',
        stderr: '',
      });
    });
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the yarn version';
    const yarnVersion$ = getYarnVersion(cwd);
    const yarnVersion = await firstValueFrom(yarnVersion$);

    then: 'the correct version is returned';
    expect(yarnVersion).toBe('1.23.4');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('yarn --version', { cwd });
  });

  it('fails when yarn is not available', async () => {
    given: 'an unavailable yarn --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the Yarn version';
    const yarnVersion$ = getYarnVersion(cwd);

    then: 'an error is thrown';
    expect(() => firstValueFrom(yarnVersion$)).rejects.toThrowError('Command failed: yarn --version');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('yarn --version', { cwd });
  });
});
