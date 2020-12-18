module.exports = {
  testMatch: ['**/modules/message/src/**/*.spec.ts'],
  name: 'message',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/message',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
