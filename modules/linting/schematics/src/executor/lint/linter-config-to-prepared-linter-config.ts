import { type Linter } from 'eslint';

/**
 * Creates a function that returns a prepared linter configuration, given a linter configuration
 *
 * @param tsConfigPath TypeScript configuration path
 * @returns Function that returns a prepared linter configuration, given a linter configuration
 */
export function linterConfigToPreparedLinterConfig(
  tsConfigPath: string
): (linterConfig: Linter.Config) => Linter.Config {
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
                  project: tsConfigPath,
                  sourceType: 'module',
                },
              },
            ],
    };
  };
}
