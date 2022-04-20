module.exports = {
  testMatch: ['**/modules/application/electron/schematics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/application-electron-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-electron-schematics',
  testEnvironment: 'node'
};
