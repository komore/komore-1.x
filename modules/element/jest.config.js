module.exports = {
  testMatch: ['**/modules/element/src/**/*.spec.ts'],
  name: 'element',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/element',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
