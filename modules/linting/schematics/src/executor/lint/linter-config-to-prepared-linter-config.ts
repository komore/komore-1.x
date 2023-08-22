import { type Linter } from 'eslint';

/**
 * Creates a function that returns a prepared linter configuration, given a linter configuration
 *
 * @param basePath Base path
 * @returns Function that returns a prepared linter configuration, given a linter configuration
 */
export function linterConfigToPreparedLinterConfig(basePath: string): (linterConfig: Linter.Config) => Linter.Config {
  return ({ overrides = [], ...config }) => {
    const tsOverride = overrides.find(override => override.files.includes('*.ts'));
    return {
      ...config,
      overrides:
        tsOverride !== undefined
          ? overrides.map(override => (override === tsOverride ? override : override))
          : [
              ...overrides,
              {
                files: ['*.ts'],
                parserOptions: {
                  ecmaVersion: 'latest',
                  // TODO: resolve
                  project: `${basePath}/*.tsconfig.*.json`,
                  sourceType: 'module',
                },
              },
            ],
    };
  };
}
