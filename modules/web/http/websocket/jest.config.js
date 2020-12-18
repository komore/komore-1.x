module.exports = {
  testMatch: ['**/modules/web/http/websocket/src/**/*.spec.ts'],
  name: 'web-http-websocket',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/web-http-websocket',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
