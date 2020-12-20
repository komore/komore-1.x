module.exports = {
  testMatch: ['**/modules/web/vibration/src/**/*.spec.ts'],
  name: 'web-vibration',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-vibration',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
