import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rules below
specify that owners, authenticated via your Auth resource can "create",
"read", "update", and "delete" their own records. Public users,
authenticated via an API key, can only "read" records.
=========================================================================*/
const schema = a.schema({
  Contact: a
    .model({
      email: a.email(),
      message: a.string(),
      replied: a.boolean(),
    })
    .authorization([
      a.allow.owner().to(['create']),
      a.allow.public().to(['create']),
      a.allow.specificGroup('Admin'),
    ]),
  Order: a
    .model({
      email: a.email(),
      phone: a.phone(),
      cashappId: a.string(),
      name: a.string(),
      company: a.string(),
      line1: a.string(),
      line2: a.string(),
      city: a.string(),
      state: a.string(),
      zip: a.string(),
      country: a.string(),
      total: a.float(),
      paid: a.boolean(),
      orderHash: a.string(),
      shipped: a.boolean(),
      shippingType: a.string(),
      shippingCost: a.float(),
      shipporateObjectId: a.string(),
      cartTotalWeight: a.integer(),
      labelURL: a.string(),
      completed: a.string(),
      tracking: a.string(),
      trackingURL: a.string(),
      paymentType: a.string(),
    })
    .authorization([
      a.allow.owner().to(['create','read']),
      a.allow.specificGroup('Admin'),
    ]),
  Product: a
    .model({
      title: a.string(),
      price: a.float(),
      weight: a.float(),
      description: a.string(),
      reviews: a.hasMany('Review'),
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.specificGroup('Admin'),
    ]),
  Review: a
    .model({
      content: a.string(),
      rating: a.integer(),
    })
    .authorization([
      a.allow.owner().to(['create','update','read']),
      a.allow.public().to(['read']),
      a.allow.specificGroup('Admin'),
    ])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
