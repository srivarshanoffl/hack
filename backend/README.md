# InsForge Backend Environment

This folder is designated for your InsForge backend resources, such as:

- `schema.sql`: For storing your database schema structure.
- `functions/`: For storing edge functions you can deploy via the `create-function` MCP tool.
- `seed.sql`: For seed data inserts.

Since InsForge provides backend-as-a-service, you do not need to run a local node/python server here. You simply interact with InsForge directly from your frontend code located in the `frontend` folder using the `@insforge/sdk` client.
