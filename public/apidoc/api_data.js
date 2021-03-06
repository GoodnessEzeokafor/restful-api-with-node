define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\"status\":\"NTask API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
