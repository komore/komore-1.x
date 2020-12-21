const nxPreset = require('@nrwl/jest/preset');
module.exports = {
  ...nxPreset,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['html']
};
