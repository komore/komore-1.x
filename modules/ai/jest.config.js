module.exports = {
  testMatch: ['**/modules/ai/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/ai',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'ai',
  testEnvironment: 'node'
};
