// external imports
const { print } = require("graphql");
const fetch = require("node-fetch");
const { ApolloServer } = require("apollo-server");
const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require("graphql-tools");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

// a fetcher to fire queries at the yelp api
const fetcher = async ({
  query: queryDocument,
  variables,
  operationName,
  context
}) => {
  // create a pretty version of the incoming query
  const query = print(queryDocument);

  // send it to yelp
  const fetchResult = await fetch("https://api.yelp.com/v3/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer DQMs_qNQqV6tg1s9eXF9o1P8R6koNTXHFUcqCgwy-9-bIQzxTTCuMX0dzChkpX9jI64PLJPIOjpWfLUSJNC7MCTqPfmjlpSUUxb6f07j-8x0YgAID7LGn4KcUlqpW3Yx"
    },
    body: JSON.stringify({ query, variables, operationName })
  });

  // look for errors
  const { data, error } = await fetchResult.json();

  // if we forgot to add the token
  if (error && error.code === "TOKEN_MISSING") {
    // tell the user
    throw new Error(error.description);
  }

  // pass the result
  console.log('server: ', data)
  return { data, error };
};

(async () => {
  console.log("introspecting the yelp graphql api...");
  const schema = makeRemoteExecutableSchema({
    schema: await introspectSchema(fetcher),
    fetcher
  });

  // now that we have the schema, create the express server
  const server = new ApolloServer({ schema });

  // start the sever on port 3030
  server.listen(3030, () =>
    console.log("🚀  Yelp proxy is running at port 3030")
  );
})();
