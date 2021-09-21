module.exports = {
  testMatch: ['**/modules/web/vibration/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-vibration',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-vibration',
  testEnvironment: 'node'
};
