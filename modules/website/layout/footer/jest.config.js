module.exports = {
  testMatch: ['**/modules/website/layout/footer/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/website-layout-footer',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'website-layout-footer'
};
