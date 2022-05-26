import { firstValueFrom, of, throwError } from '@komore/reactive';
jest.mock('@komore/runtime/node');
import { executeChildProcess } from '@komore/runtime/node';
import { getNpmVersion } from './get-npm-version';

describe('Get npm version', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;
  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  it('returns the npm version', async () => {
    given: 'an available npm --version command';
    mockExecuteChildProcess.mockImplementationOnce(() => {
      return of({
        stdout: '8.0.1',
        stderr: '',
      });
    });
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the npm version';
    const npmVersion$ = getNpmVersion(cwd);
    const npmVersion = await firstValueFrom(npmVersion$);

    then: 'the correct version is returned';
    expect(npmVersion).toBe('8.0.1');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('npm --version', { cwd });
  });

  it('fails when npm is not available', async () => {
    given: 'an unavailable npm --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the npm version';
    const npmVersion$ = getNpmVersion(cwd);

    then: 'an error is thrown';
    expect(() => firstValueFrom(npmVersion$)).rejects.toThrowError('Command failed: npm --version');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('npm --version', { cwd });
  });
});
