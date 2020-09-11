module.exports = {
  name: 'dev-server',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/dev-server',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
