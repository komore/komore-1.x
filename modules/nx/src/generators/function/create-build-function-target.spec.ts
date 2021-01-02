import { BaseGeneratorOptions } from '../base-generator-options';
import { NormalizedGeneratorOptions } from '../normalized-generator-options';
import { createBuildFunctionTarget } from './create-build-function-target';

describe('Create build function target', () => {
  it('builds a function target', () => {
    // given: normalized generator options
    const normalizedGeneratorOptions: NormalizedGeneratorOptions<BaseGeneratorOptions> = {
      name: 'name',
      projectName: 'project-name',
      projectDirectory: 'project-directory',
      projectRoot: 'project-root',
      parsedTags: [],
      sourceRoot: 'source-root'
    };
    // when: creating a build function target
    const buildFunctionTarget = createBuildFunctionTarget(normalizedGeneratorOptions);
    // then: the build function target has the correct settings
    expect(buildFunctionTarget.executor).toBe('@komore/nx:build-function');
    expect(buildFunctionTarget.outputs).toStrictEqual(['{options.outputPath}']);
    expect(buildFunctionTarget.options.outputPath).toBe('dist/project-root');
    expect(buildFunctionTarget.options.tsConfig).toBe(`project-root/tsconfig.lib.json`);
    expect(buildFunctionTarget.options.packageJson).toBe(`project-root/package.json`);
    expect(buildFunctionTarget.options.main).toBe(`project-root/index.ts`);
  });
});
