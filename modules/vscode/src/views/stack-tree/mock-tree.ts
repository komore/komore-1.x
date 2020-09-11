import { Uri } from 'vscode';
import { StackTreeItem } from './stack-tree-item';

export const mockTree: ReadonlyArray<StackTreeItem> = [
  {
    uri: Uri.parse('komore://agora'),
    name: 'Agora',
    type: 'stack',
    childNodes: [
      {
        name: 'Applications',
        description: 'Generation, web hosting and store submission',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Articles',
        description: 'Writing, notes, interviews, reviews',
        type: 'bounded-context',
        childNodes: [
          {
            name: 'API',
            description: 'Articles GraphQL API schema',
            type: 'api',
            childNodes: [
              {
                name: 'Mutations',
                type: 'api-mutation-group',
                childNodes: [
                  {
                    name: 'createArticle',
                    description: 'createArticle mutation',
                    type: 'api-mutation',
                    childNodes: []
                  }
                ]
              },
              {
                name: 'Queries',
                type: 'api-query-group',
                childNodes: [
                  {
                    name: 'getArticle',
                    description: 'getArticle query',
                    type: 'api-query',
                    childNodes: []
                  }
                ]
              },
              {
                name: 'Subscriptions',
                type: 'api-subscription-group',
                childNodes: [
                  {
                    name: 'articleEvent',
                    description: 'articleEvent subscription',
                    type: 'api-subscription',
                    childNodes: []
                  }
                ]
              }
            ]
          },
          {
            name: 'Command Store',
            description: 'ArticleCommands DynamoDB table',
            type: 'command-store',
            childNodes: [
              {
                name: 'articleCommandHandler',
                type: 'command-handler',
                childNodes: [
                  {
                    name: 'createArticle',
                    type: 'command-handler-on',
                    childNodes: []
                  }
                ]
              },
              {
                name: 'handleArticleCommand',
                description: 'Command handler function',
                type: 'command-handler-function',
                childNodes: []
              }
            ]
          },
          {
            name: 'Event Store',
            description: 'ArticleEvents DynamoDB table',
            type: 'event-store',
            childNodes: [
              {
                name: 'Event Reducer',
                description: 'articleReducer',
                type: 'event-reducer',
                childNodes: [
                  {
                    name: 'articleCreated',
                    type: 'event-reducer-on',
                    childNodes: []
                  },
                  {
                    name: 'authorAdded',
                    type: 'event-reducer-on',
                    childNodes: []
                  },
                  {
                    name: 'authorRemoved',
                    type: 'event-reducer-on',
                    childNodes: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Billing',
        description: 'Invoice generation and revenue overview',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Content',
        description: 'Editing and organizing media content',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Dashboards',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Designs',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Domains',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Fact-Checking',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Marketplace',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Missions',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Memberships',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Newsletters',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Payments',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Paywalls',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Portfolios',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Profiles',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Publishing',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Recommendations',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Search',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Social',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Subscriptions',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Trust',
        type: 'bounded-context',
        childNodes: []
      },
      {
        name: 'Users',
        type: 'bounded-context',
        childNodes: []
      }
    ]
  }
];
