# JAM Stack Project

Using React, FaunaDB, GraphQL, and Netlify Functions

## Working with Netlify Functions

`netlify dev` to start local server
the server will start in http://localhost:8888

/.netlify/functions/getLinks or /.netlify/functions/getLinks

## Current Problem ⚠

### Too tired to finish the add link

Finish the LinkForm component to enable adding links through POST request to /.netlify/functions/createLink

Update (27/09/2020) completed all functionality. Also added loading animation from react-loadingg library.

### Postman Agent (25/09/2020)

Postman Agent can't start in my Windows 10 machine. Tomorrow I will restart the PC and then try to start Postman Agent again.

Update (26/09/2020) I can send post request to localhost using Insomnia.REST. Thanks to @azzamsa from the Coding discord server.

## FaunaDB

fnAD2jo7ymACEz8IOhT4gCOG84Usg8CEBvPatSZ9

## How to Deploy to Netlify

Just deploy, set build command to `npm run build` and publish directory to `build`
add environment variables, example: the FAUNADB Key