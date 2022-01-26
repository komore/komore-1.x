module.exports = {
  testMatch: ['**/modules/storybook/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/storybook',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'storybook',
  testEnvironment: 'node'
};
