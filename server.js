const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./graphql/schema");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
