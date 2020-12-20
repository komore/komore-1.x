module.exports = {
  testMatch: ['**/modules/typescript/src/**/*.spec.ts'],
  name: 'typescript',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/typescript',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
