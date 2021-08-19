module.exports = {
  testMatch: ['**/modules/typescript/schema/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/typescript-schema',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'typescript-schema'
};
