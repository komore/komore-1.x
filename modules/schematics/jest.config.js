module.exports = {
  testMatch: ['**/modules/schematics/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics'
};
