module.exports = {
  testMatch: ['**/modules/layer/message-broker/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/layer-messagebroker',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'layer-messagebroker',
};
