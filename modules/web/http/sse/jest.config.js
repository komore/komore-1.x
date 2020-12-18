module.exports = {
  testMatch: ['**/modules/web/http/sse/src/**/*.spec.ts'],
  name: 'web-http-sse',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/web-http-sse',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
