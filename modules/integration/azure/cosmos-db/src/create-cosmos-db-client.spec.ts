import { mock } from 'jest-mock-extended';
import { type CosmosClient, type Databases } from '@azure/cosmos';
import { createCosmosDBClient } from './create-cosmos-db-client';

describe('Create CosmosDB client', () => {
  const databases = mock<Databases>();
  const cosmosClient = mock<CosmosClient>({
    databases
  });

  it('can create a CosmosDB client', () => {
    createCosmosDBClient();
  });
});
