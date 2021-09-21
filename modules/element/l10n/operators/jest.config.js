module.exports = {
  testMatch: ['**/modules/element/l10n/operators/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-l10n-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-l10n-operators',
  testEnvironment: 'node'
};
