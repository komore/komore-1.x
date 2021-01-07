module.exports = {
  testMatch: ['**/modules/authorization/abac/xacml/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/authorization-abac-xacml',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac-xacml'
};
