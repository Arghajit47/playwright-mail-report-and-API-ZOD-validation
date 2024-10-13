const { test, expect } = require("@playwright/test");
const { z } = require("zod");
const { schema, getCommentSchema } = require("../schemas/schema");

test("Validate API schema", async ({ request }) => {
  // Fix the URL typo
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  expect(response.ok()).toBeTruthy(); // Check if the response is successful

  const responseBody = await response.json(); // Parse response body

  // Validate the response against the schema
  const result = schema.parse(responseBody);

  /* If used safeParse, It will safely validate the responseBody with the given schema
    
    const result = schema.safeParse(responseBody);
  
    // Expect the schema validation to succeed
    expect(result.success).toBeTruthy();
  
    // If validation fails, log the error
    if (!result.success) {
      console.error(result.error);
    } */
});

test("Validate Post 1 all comments", async ({request}) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/1/comments");

  expect(response.ok()).toBeTruthy(); // Check if the response is successful

  const responseBody = await response.json(); // Parse response body

  // Validate the response against the schema
  const result = getCommentSchema.parse(responseBody);
})
