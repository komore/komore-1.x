module.exports = {
  testMatch: ['**/modules/application/tauri/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/application-tauri',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-tauri',
  testEnvironment: 'node'
};
