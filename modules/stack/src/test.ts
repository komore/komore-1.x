import { stack } from './lib/stack-root-node';
import { AWS } from './lib/aws/aws';
import { variable } from '.';
import { StoreNode } from './lib/store-node';


function storeResolver(context: StackContext, storeType: string, storeName: string): StoreNode {

}

stack('agora',
  resolver('store', storeResolver),
  resolver('function', functionResolver),
  boundedContext('articles',
    api(),
    commands: {
      store: AWS.DynamoDB({
        tableName: variable('articles.command.table_name')
        billingMode: 'PAY_PER_REQUEST',
        hashKey: 'articleId',
        ttl: {
          attributeName: 'ts'
        }
      }),
      handler: functionReference('@komore-sample-todo-list/')
    store('event',
      AWS.DynamoDB({
        tableName: variable('articles.event.table_name')
      })
    ),
    store('aggregate',
      AWS.DynamoDB({
        tableName: variable('articles.aggregate.table_name')
      })
    ),
    commandHandler
  ),
  boundedContext('domains',
    api('domains', {
      schema: 
    }),
    commands: 
  ),
  boundedContext('users',
  ),
  store('articles',
    AWS.DynamoDB(variable('articles'), {
      billingMode: 'PAY_PER_REQUEST'
    })
    .reducer('@agora/article/context', 'getSomething') // TODO: typed using typeof the import and keyof \o/
  ),
  store('user',
    AWS.DynamoDB(variable('xx'))
  ),
  api('agora',
  ),
  output()
);
