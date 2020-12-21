module.exports = {
  testMatch: ['**/modules/authorization/abac/xacml/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/authorization-abac-xacml',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac-xacml'
};
