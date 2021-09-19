module.exports = {
  testMatch: ['**/modules/website/layout/navigation/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/website-layout-navigation',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'website-layout-navigation'
};
