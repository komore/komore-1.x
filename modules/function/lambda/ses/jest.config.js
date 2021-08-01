module.exports = {
  testMatch: ['**/modules/function/lambda/ses/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/function-lambda-ses',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-ses'
};
