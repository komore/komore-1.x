module.exports = {
  testMatch: ['**/modules/web/http/websocket/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-http-websocket',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-http-websocket',
  testEnvironment: 'node'
};
