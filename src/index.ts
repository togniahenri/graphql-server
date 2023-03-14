// src/index.ts

// 1
import { createServer } from '@graphql-yoga/node';

// 2
const port = Number(process.env.API_PORT) || 4000
// 3
const server = createServer({
  port
});
// 4
server.start().then(() => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});