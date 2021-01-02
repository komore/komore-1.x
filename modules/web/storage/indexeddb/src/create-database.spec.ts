import { createDatabase } from './create-database';

describe('Create database', () => {
  it('creates a cold observable', () => {
    createDatabase('lala');
  });
  it('creates a database upon subscription', () => {
    createDatabase('lala');
  });

  it('closes the database when the last subscription closes', () => {
    createDatabase('lala');
  });
});
