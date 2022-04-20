module.exports = {
  testMatch: ['**/modules/application/tauri/schematics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/application-tauri-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-tauri-schematics',
  testEnvironment: 'node'
};
