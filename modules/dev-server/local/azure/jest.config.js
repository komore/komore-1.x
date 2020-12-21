module.exports = {
  testMatch: ['**/modules/dev-server/emulation/azure/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/devserver-emulation-azure',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-azure'
};
