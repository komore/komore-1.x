jest.mock('child_process');
import { execSync, type SpawnSyncReturns } from 'child_process';
import { executeCargoMetadata } from './execute-cargo-metadata';

describe('Execute cargo metadata', () => {
  type ExecSyncType = typeof execSync;
  type MockExecSyncType = jest.Mock<string, Parameters<ExecSyncType>>;
  const mockExecSync = execSync as unknown as MockExecSyncType;

  beforeEach(() => mockExecSync.mockClear());

  it('returns the cargo metadata command output', () => {
    given: 'a mock execSync';
    const mockCommandOutput = 'test output';
    mockExecSync.mockReturnValueOnce(mockCommandOutput);
    when: 'executing the cargo metadata command';
    const result = executeCargoMetadata();
    expect: 'the cargo metada command to have been executed';
    expect(mockExecSync).toHaveBeenCalledTimes(1);
    expect(mockExecSync).toHaveBeenCalledWith('cargo metadata --format-version=1', { encoding: 'utf-8' });
    and: 'the output of the command metadata output to have been returned';
    expect(result).toBe(mockCommandOutput);
  });

  it('logs an error and rethrows when executing the command fails', () => {
    given: 'a mock execSync that throws an error';
    const mockError = new MockSpawnSyncError(42);
    mockExecSync.mockImplementationOnce(() => {
      throw mockError;
    });
    when: 'executing the cargo metadata command';
    expect(() => executeCargoMetadata()).toThrowError(mockError);
  });

  it('returns undefined when there is no Cargo.toml or no packages defined', () => {
    given: 'a mock execSync that throws a spawnSync error with status 101';
    const mockError = new MockSpawnSyncError(101);
    mockExecSync.mockImplementationOnce(() => {
      throw mockError;
    });
    when: 'executing the cargo metadata command';
    const result = executeCargoMetadata();
    expect: 'undefined to have been returned';
    expect(result).toBeUndefined();
  });
});

/**
 * Mock spawnSync error
 */
class MockSpawnSyncError extends Error implements SpawnSyncReturns<unknown> {
  readonly pid = 1234;
  readonly output = [];
  readonly stdout = undefined;
  readonly stderr = undefined;
  readonly signal = null;

  /**
   * Class constructor
   * @param status Status
   */
  constructor(readonly status: number) {
    super();
  }
}
