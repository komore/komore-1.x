module.exports = {
  testMatch: ['**/modules/dev-server/local/src/**/*.spec.ts'],
  name: 'devserver-local',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/devserver-local'
};
