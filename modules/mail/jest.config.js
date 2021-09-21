module.exports = {
  testMatch: ['**/modules/mail/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../../coverage/mail',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'mail',
  testEnvironment: 'node'
};
