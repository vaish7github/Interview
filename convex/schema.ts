// this is the schema of our db the shape of our data base

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
// this is our users table defined in the schema
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal("candidate"), v.literal("interviewer")),
        clerkId: v.string(),
    }).index("by_clerk_id", ["clerkId"]),
});
// now this table is pushed in the convex 
// https://first-ferret-81.clerk.accounts.dev   this is the jwt

