module.exports = {
  testMatch: ['**/modules/vscode-extension/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/vscode-extension',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'vscode-extension',
  testEnvironment: 'node'
};
