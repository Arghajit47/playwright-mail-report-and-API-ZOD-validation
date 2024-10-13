const { z } = require("zod");

// Define the schema for a single user
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
}).strict();

export const getUserSchema = z.array(userSchema).or(z.array(z.any()).length(0));


export const commentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
}).strict();

export const getCommentSchema = z.array(commentSchema).or(z.array(z.any()).length(0));

export const exampleSchema = z
.object({
  date: z.string().datetime(), // ISO 8601 datetime string
  brands: z.array(z.string()), // An array of strings
  source: z.string().optional(), // An optional string field
  gpId: z.string().url(), // A valid URL string
  link: z.string().url().optional(), // A valid URL string
  id: z.string().uuid(), // A UUID string
  description: z.string(), // A string field
  type: z.enum(["video", "article", "image", "testimonial"]), // Should be one of the allowed types
  title: z.string(), // A string field for the title
})
.strict();