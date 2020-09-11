module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['html']
};
