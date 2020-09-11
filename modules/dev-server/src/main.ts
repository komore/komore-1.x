import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

interface Book {
  title: string;
  author: string;
}

const books: ReadonlyArray<Book> = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

const resolvers = {
  Query: {
    books: async () => books
  }
}

async function main() {
  console.log('komore development server');
  const server = new ApolloServer({ typeDefs, resolvers });
  const serverInfo = await server.listen();
  console.log(`Listening on ${serverInfo.url}`, serverInfo);
}

main();
