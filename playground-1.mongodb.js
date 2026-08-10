// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('nckenoWatch');

// Create a new document in the collection.
db.getCollection('user_scopes').insertOne({
  "user_uuid": "a15f42ce-1177-11ef-9fbb-fbb18c10e7e2",
  "scope_readWrite": {
    "read": true,
    "write": true
  },
  "scope_admin": {
    "admin": true,
    "write": true
  }
});
