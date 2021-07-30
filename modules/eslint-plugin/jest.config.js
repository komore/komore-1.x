module.exports = {
  testMatch: ['**/modules/eslint-plugin/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/eslintplugin',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'eslintplugin'
};
