module.exports = {
  testMatch: ['**/modules/dev-server/emulation/google/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/devserver-emulation-google',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-google'
};
