import { ensureNxProject, runNxCommandAsync, uniq } from '@nrwl/nx-plugin/testing';

describe('Generate function', () => {
  it('should create a function project', async () => {
    const functionName = uniq('test-function');
    ensureNxProject('@komore/nx', 'dist/modules/nx');
    await runNxCommandAsync(`generate @komore/nx:function ${functionName}`);
    const result = await runNxCommandAsync(`build ${functionName}`);
    expect(result.stdout).toContain('Executor ran');
  });
});
