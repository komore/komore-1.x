module.exports = {
  testMatch: ['**/modules/web/screen-wake-lock/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-screenwakelock',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-screenwakelock'
};
