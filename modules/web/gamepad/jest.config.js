module.exports = {
  testMatch: ['**/modules/web/gamepad/src/**/*.spec.ts'],
  name: 'web-gamepad',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-gamepad',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
