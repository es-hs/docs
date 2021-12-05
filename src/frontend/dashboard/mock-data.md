# Mock Data

## GraphQL

### Step 1: Find your query/mutation in APIs Documentation

The document in [here](https://documenter.getpostman.com/view/6440357/UVC9i66N)

For example, I got the query `themeTemplates` in `queries/themeTemplates/themeTemplate`

```graphql
query themeTemplate($id: Int!) {
  themeTemplate(id: $id) {
    createdAt
    isDefault
    id
    name
    pageType
    themeGlobalStyleId
    updatedAt
  }
}
```

which have the response example is:

```json
{
  "data": {
    "themeTemplate": {
      "createdAt": "2021-12-03T08:25:23.285372Z",
      "id": "1",
      "isDefault": false,
      "name": "hehe",
      "pageType": "INDEX",
      "themeGlobalStyleId": 1,
      "updatedAt": "2021-12-03T08:25:23.285372Z"
    }
  }
}
```

> Please to contact backend team if there are any APIs which do not have response example

### Step 2: Create mock data in project

Create the json mock data file in `mock/graphql/data/queries/themeTemplates/themeTemplate.jsonc` and paste the reponse example below into this.

Remember to wrap `"success": {}` object outside the response example like this:

```json
{
  "success": {
    "data": {
      "themeTemplate": {
        "createdAt": "2021-12-03T08:25:23.285372Z",
        "id": "1",
        "isDefault": false,
        "name": "hehe",
        "pageType": "INDEX",
        "themeGlobalStyleId": 1,
        "updatedAt": "2021-12-03T08:25:23.285372Z"
      }
    }
  }
}
```

### Step 3: Declare the dev server to read mock data

Open `mock/graphql/queries.ts` and add a case like this:

```javascript
case "query themeTemplate":
  mockFile = "mock/graphql/data/queries/themeTemplates/themeTemplate.jsonc";
  break;
```

Almost done! :)

### Notes

- Do the same thing with mutation:

  - Put mock data in `mock/graphql/data/mutations` folder
  - Declare dev server to read mock data file in `mock/graphql/mutations.ts`
  - Also wrap `"success": {}` object outside the mock data

## Restful API

### Step 1: Find your endpoint in APIs Documentation

The document in [here](https://documenter.getpostman.com/view/7718662/UVC9i66Q)

For example, I got the api get current user request in `users/CurrentUser`

Endpoint:

```url
/api/admin/me
```

which have the success response example is:

```json
{
  "shop": {
    "id": 1,
    "createdAt": "2021-12-02T10:43:40.585622Z",
    "updatedAt": "2021-12-02T10:46:17.901246Z",
    "deletedAt": null,
    "name": "dragon_born",
    "defaultDomain": "dragon_born",
    "users": null,
    "shopMetas": null,
    "shopEvents": null,
    "theme": null,
    "themeTemplates": null
  },
  "status": true,
  "user": {
    "id": 1,
    "createdAt": "2021-12-02T10:43:40.582888Z",
    "updatedAt": "2021-12-02T10:43:40.582888Z",
    "deletedAt": null,
    "username": "dragon_born",
    "email": "longthanh@gempages.help",
    "shop": null,
    "roles": null
  }
}
```

and the error response example is:

```json
{
  "error": "Cannot get current user"
}
```

> Please to contact backend team if there are any APIs which do not have success/error response example

### Step 2: Create mock data in project

Create the json mock data file in `mock/restful/user/data/currentUser.jsonc` and paste the reponse example below into this.

Remember to write down a json like this:

```json
{
  "code": 200,
  "delay": 1000,
  "success": {
    "shop": {
      "id": 1,
      "createdAt": "2021-12-02T10:43:40.585622Z",
      "updatedAt": "2021-12-02T10:46:17.901246Z",
      "deletedAt": null,
      "name": "dragon_born",
      "defaultDomain": "dragon_born",
      "users": null,
      "shopMetas": null,
      "shopEvents": null,
      "theme": null,
      "themeTemplates": null
    },
    "status": true,
    "user": {
      "id": 1,
      "createdAt": "2021-12-02T10:43:40.582888Z",
      "updatedAt": "2021-12-02T10:43:40.582888Z",
      "deletedAt": null,
      "username": "dragon_born",
      "email": "longthanh@gempages.help",
      "shop": null,
      "roles": null
    }
  },
  "error": {
    "error": "Cannot get current user"
  }
}
```

- **code**: response status code, 200 if success request, 400 if you want to test error request, default value in code is 200 if it is not setted
- **delay**: dev server will delay X millisecond before response, default value is 1000 (1 second)
- **success**: success response from server
- **error**: error response from server

### Step 3: Declare the dev server to read mock data

Export an array of object on each module in `mock/restful` folder, eg `mock/restful/user/user.ts`

```typescript
import fs from "fs";
import { MockMethod } from "vite-plugin-mock";

export default [
  // mock user login
  {
    url: "/api/me",
    timeout: 200,
    method: "get",
    rawResponse: async (req, res) => {
      const config = JSON.parse(
        fs.readFileSync("./mock/restful/user/data/currentUser.jsonc", {
          encoding: "utf8",
        })
      );
      setTimeout(() => {
        res.statusCode = config.code;
        if (config.code >= 200 && config.code < 300) {
          res.end(JSON.stringify(config.success));
        } else {
          res.end(JSON.stringify(config.error));
        }
      }, config.delay || 1000);
    },
  },
] as MockMethod[];
```

Add new object to the code below still exist:

```typescript
{
  url: "/api/me",
  timeout: 200,
  method: "get",
  rawResponse: async (req, res) => {
    const config = JSON.parse(
      fs.readFileSync("./mock/restful/user/data/currentUser.jsonc", {
        encoding: "utf8",
      })
    );
    setTimeout(() => {
      res.statusCode = config.code;
      if (config.code >= 200 && config.code < 300) {
        res.end(JSON.stringify(config.success));
      } else {
        res.end(JSON.stringify(config.error));
      }
    }, config.delay || 1000);
  },
},
```

> All the exported module will be auto imported, read code in `mock/_createProductionServer.ts`

Almost done! :)

## References

- [https://github.com/anncwb/vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [https://github.com/anncwb/vue-vben-admin](https://github.com/anncwb/vue-vben-admin)
