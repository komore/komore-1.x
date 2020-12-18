module.exports = {
  testMatch: ['**/modules/web/src/**/*.spec.ts'],
  name: 'web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/web',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
