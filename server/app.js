const express = require('express');   // express is our server
const  { graphqlHTTP } = require('express-graphql');   // express server to run gql API

const schema = require('./schema/schema');


const app = express();



// middleware setup, express does not know how to treat GQL so we tell it to use graphqlHTTP which knows how to do it 
app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}))



app.listen(4000, () => {
    console.log('The app is launched on localhost 4000')
})


