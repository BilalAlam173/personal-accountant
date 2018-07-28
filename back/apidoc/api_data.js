define({ "api": [
  {
    "type": "post",
    "url": "/account",
    "title": "Create new account",
    "name": "Create",
    "group": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user's fullname.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "positive",
            "description": "<p>True means positive i.e an increase in this account will cause increase in cash and vise versa.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"name\": \"Income\",\n        \"positive\": true,\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T17:11:22.000Z\",\n        \"createdAt\": \"2018-07-28T17:11:22.000Z\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "delete",
    "url": "/account",
    "title": "delete an account",
    "name": "Delete",
    "group": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user's fullname.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "positive",
            "description": "<p>True means positive i.e an increase in this account will cause increase in cash and vise versa.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"name\": \"Income\",\n        \"positive\": true,\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T17:11:22.000Z\",\n        \"createdAt\": \"2018-07-28T17:11:22.000Z\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "put",
    "url": "/account",
    "title": "update an account",
    "name": "Delete",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"name\": \"Income\",\n        \"positive\": true,\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T17:11:22.000Z\",\n        \"createdAt\": \"2018-07-28T17:11:22.000Z\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account",
    "title": "get all accounts",
    "name": "Get_all",
    "group": "Account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{\n \"name\": \"Income\",\n        \"positive\": true,\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T17:11:22.000Z\",\n        \"createdAt\": \"2018-07-28T17:11:22.000Z\"\n       }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "login",
    "name": "Login",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password in plain text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"id\": 1,\n    \"name\": \"test\",\n    \"email\": \"test@test.com\",\n    \"username\": \"test\",\n    \"hashedPassword\": \"Jw6dGVHE/yarnU0YYQTSyAAgXuBzW3whCS7rIUskGKnCGAzjTV3FfwuEU1qefkxhXy7BZPRNXM6uc4546fYN9w==\",\n    \"provider\": \"local\",\n    \"salt\": \"f7yHXJJJY9MwkdUPpGZwFA==\",\n    \"openId\": null,\n    \"createdAt\": \"2018-07-28T16:49:30.000Z\",\n    \"updatedAt\": \"2018-07-28T16:49:30.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/user.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Signup",
    "name": "Signup",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user's fullname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"provider\": \"local\",\n \"salt\": \"v+sYyLWepiodXSiM/n2x4A==\",\n \"hashedPassword\": \"egv3PWg4Ow6ohxJghpGlp+HbtjWi3P8iDS5XgGM/DapFkmKxanLPI0usrD/oJd/Os0vgdbGp0WfIO/d6TlP5rw==\",\n \"updatedAt\": \"2018-07-28T15:20:06.000Z\",\n \"createdAt\": \"2018-07-28T15:20:06.000Z\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/user.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Create new category",
    "name": "Create",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account title/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "AccountId.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"name\": \"Transport\",\n        \"AccountId\": 1,\n        \"account\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T20:13:12.000Z\",\n        \"createdAt\": \"2018-07-28T20:13:12.000Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/category",
    "title": "update an category",
    "name": "Delete",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PK",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Account title/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "AccountId.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"name\": \"Transport\",\n        \"AccountId\": 1,\n        \"account\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T20:13:12.000Z\",\n        \"createdAt\": \"2018-07-28T20:13:12.000Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.<em>@apiError server Something went wrong.</em>@apiError server Error while finding the user with the provided id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/category",
    "title": "delete an category",
    "name": "Delete",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "PK",
            "optional": false,
            "field": "id",
            "description": "<p>unique id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"name\": \"Transport\",\n        \"AccountId\": 1,\n        \"account\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T20:13:12.000Z\",\n        \"createdAt\": \"2018-07-28T20:13:12.000Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.<em>@apiError server Something went wrong.</em>@apiError server Error while finding the user with the provided id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "get all accounts",
    "name": "Get_all",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    [{\n        \"name\": \"Transport\",\n        \"AccountId\": 1,\n        \"account\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T20:13:12.000Z\",\n        \"createdAt\": \"2018-07-28T20:13:12.000Z\"\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/entry",
    "title": "Create new entry",
    "name": "Create",
    "group": "Entry",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>entry title or descrition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>total amount</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "AccountId",
            "description": "<p>Acount's reference</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>Category's reference</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "MethodId",
            "description": "<p>Method's reference</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n     {\n        \"title\": \"Transport\",\n        \"amount\": 100,\n        \"AccountId\": 1,\n        \"CategoryId\": 1,\n        \"MethodId\": 1,\n        \"account\": \"Income\",\n        \"method\": \"Income\",\n        \"category\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T19:53:40.000Z\",\n        \"createdAt\": \"2018-07-28T19:53:40.000Z\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "put",
    "url": "/entry",
    "title": "update an entry",
    "name": "Delete",
    "group": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "PK",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>entry title or descrition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>total amount</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "AccountId",
            "description": "<p>Acount's reference</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>Category's reference</p>"
          },
          {
            "group": "Success 200",
            "type": "FK",
            "optional": false,
            "field": "MethodId",
            "description": "<p>Method's reference</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"name\": \"Income\",\n        \"positive\": true,\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T17:11:22.000Z\",\n        \"createdAt\": \"2018-07-28T17:11:22.000Z\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "delete",
    "url": "/entry",
    "title": "delete an entry",
    "name": "Delete",
    "group": "Entry",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "PK",
            "optional": false,
            "field": "id",
            "description": "<p>user's unique id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n        \"title\": \"Transport\",\n        \"amount\": 100,\n        \"AccountId\": 1,\n        \"CategoryId\": 1,\n        \"MethodId\": 1,\n        \"account\": \"Income\",\n        \"method\": \"Income\",\n        \"category\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T19:53:40.000Z\",\n        \"createdAt\": \"2018-07-28T19:53:40.000Z\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "post",
    "url": "/entry",
    "title": "get all accounts",
    "name": "Get_all",
    "group": "Entry",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n        \"title\": \"Transport\",\n        \"amount\": 100,\n        \"AccountId\": 1,\n        \"CategoryId\": 1,\n        \"MethodId\": 1,\n        \"account\": \"Income\",\n        \"method\": \"Income\",\n        \"category\": \"Income\",\n        \"id\": 1,\n        \"updatedAt\": \"2018-07-28T19:53:40.000Z\",\n        \"createdAt\": \"2018-07-28T19:53:40.000Z\"\n     }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/entry.js",
    "groupTitle": "Entry"
  },
  {
    "type": "post",
    "url": "/method",
    "title": "Create new method",
    "name": "Create",
    "group": "Method",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>method title/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>cash/account etc.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"name\": \"Transport\",\n        \"type\": \"Cash\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/method.js",
    "groupTitle": "Method"
  },
  {
    "type": "delete",
    "url": "/method",
    "title": "delete an method",
    "name": "Delete",
    "group": "Method",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "PK",
            "optional": false,
            "field": "id",
            "description": "<p>unique key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n\n    {\n        \"name\": \"Transport\",\n        \"type\": \"Cash\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/method.js",
    "groupTitle": "Method"
  },
  {
    "type": "put",
    "url": "/method",
    "title": "update an method",
    "name": "Delete",
    "group": "Method",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>method title/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>cash/account etc.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n           \"name\": \"Transport\",\n           \"type\": \"Cash\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "server",
            "description": "<p>No user found with the provided id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/method.js",
    "groupTitle": "Method"
  },
  {
    "type": "post",
    "url": "/method",
    "title": "get all accounts",
    "name": "Get_all",
    "group": "Method",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    {\n        \"name\": \"Transport\",\n        \"type\": \"Cash\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unknown",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "back/routes/method.js",
    "groupTitle": "Method"
  }
] });
