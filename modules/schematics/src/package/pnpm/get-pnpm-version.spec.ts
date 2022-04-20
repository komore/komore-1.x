import { firstValueFrom, of, throwError } from '@komore/reactive';
jest.mock('@komore/runtime/node');
import { executeChildProcess } from '@komore/runtime/node';
import { getPnpmVersion } from './get-pnpm-version';

describe('Get pnpm version', () => {
  type ExecuteChildProcessType = typeof executeChildProcess;
  type MockedExecuteChildProcessType = jest.Mock<
    ReturnType<ExecuteChildProcessType>,
    Parameters<ExecuteChildProcessType>
  >;
  const mockExecuteChildProcess = executeChildProcess as MockedExecuteChildProcessType;

  afterEach(() => mockExecuteChildProcess.mockClear());

  it('returns the pnpm version', async () => {
    given: 'an available pnpm --version command';
    mockExecuteChildProcess.mockImplementationOnce(() =>
      of({
        stdout: '6.7.8',
        stderr: '',
      })
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the pnpm version';
    const pnpmVersion$ = getPnpmVersion(cwd);
    const pnpmVersion = await firstValueFrom(pnpmVersion$);

    then: 'the correct version is returned';
    expect(pnpmVersion).toBe('6.7.8');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('pnpm --version', { cwd });
  });

  it('fails when pnpm is not available', async () => {
    given: 'an unavailable pnpm --version command';
    mockExecuteChildProcess.mockImplementationOnce(command =>
      throwError(() => new Error(`Command failed: ${command}`))
    );
    and: 'a current working directory';
    const cwd = '.';

    when: 'getting the pnpm version';
    const pnpmVersion$ = getPnpmVersion(cwd);

    then: 'an error is thrown';
    expect(() => firstValueFrom(pnpmVersion$)).rejects.toThrowError('Command failed: pnpm --version');
    expect(mockExecuteChildProcess).toHaveBeenCalledTimes(1);
    expect(mockExecuteChildProcess).toHaveBeenCalledWith('pnpm --version', { cwd });
  });
});
