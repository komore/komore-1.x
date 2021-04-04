module.exports = {
  testMatch: ['**/modules/tools/vscode/extension/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/tools-vscode-extension',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'tools-vscode-extension'
};
