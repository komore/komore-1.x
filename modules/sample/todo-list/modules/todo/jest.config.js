module.exports = {
  testMatch: ['**/modules/sample/todo-list/modules/todo/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/sample-todolist-todo',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'sample-todolist-todo'
};
