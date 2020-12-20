module.exports = {
  testMatch: ['**/modules/local/src/**/*.spec.ts'],
  name: 'local',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/local',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
