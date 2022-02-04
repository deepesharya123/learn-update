const express = require('express');
const app = express();
const port =3000;
require('./models/')
const {graphqlHTTP} =require('express-graphql');
const schema = require('./Schema/index');
app.use(express.json());

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql:true
    })
)

app.listen(port,()=> console.log(`Listening at port ${port}`))