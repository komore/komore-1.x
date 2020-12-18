module.exports = {
  testMatch: ['**/modules/web/observer/src/**/*.spec.ts'],
  name: 'web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/web-observer',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
