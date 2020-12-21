module.exports = {
  testMatch: ['**/modules/eslint-plugin/src/**/*.spec.ts'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/eslintplugin',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'eslintplugin'
};
