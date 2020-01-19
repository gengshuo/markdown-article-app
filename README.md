# Getting Started

```
$> yarn
$> yarn start
```


# API Mockup Description
Here is using JSON server for API mockup
```
$> npx json-server --watch ./mock_data/db.json --port 7000
```

## Article List API 

API mock url: http://localhost:7000/articles

Method: `GET`

URL Parameters
- N/A

Request Body
- N/A

Response (JSON)
```
    [
        {
            "id": (int),
            "subject": (string),
            "content": (text)
        },
        {
            "id": (int),
            "subject": (string),
        },
        {
            "id": (int),
            "subject": (string),
        },
        ...
    ]
```
---
## Article Detail API

API mock url: http://localhost:7000/articles/:id

Method: `GET`

URL Parameters
- id: (int)

Request Body
- N/A

Response (JSON)
```
    {
        "id": (int),
        "subject": (string),
        "content": (Markdown Text: string)
    }
```
---
## Create Article API

API mock url: http://localhost:7000/articles

Method: `POST`

URL Parameters
- id: (int)

Request Body
(JSON)
``` 
{
    "subject": (string),
    "content": (string)
}
``` 

Response Structure
```
    {
        "subject": (string),
        "content": (string),
        "id": (int: auto_gen)
    }
```
---
## Update Article API

API mock url: http://localhost:7000/articles/:id

Method: `PUT`

URL Parameters
- id: (int)

Request Body
(JSON)
``` 
{
    "subject": (string),
    "content": (string)
}
``` 

Response Structure
```
    {
        "id": (int),
        "subject": (string),
        "content": (string)
    }
```