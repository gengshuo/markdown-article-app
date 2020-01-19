# Getting Started

```
$> yarn
$> yarn start
```


# API Mockup Description

## Article List API 

API mock url: http://www.mocky.io/v2/5e22ca582f00002b002225fe

Request Parameters
- N/A

Response Structure
```
    {
        "data": [
            {
                "id": (int),
                "subject": (string),
            },
            {
                "id": (int),
                "subject": (string),
            },
            {
                "id": (int),
                "subject": (string),
            }
        ]
    }
```
---
## Article Detail API

API mock url: http://www.mocky.io/v2/5e230d4b2f00007f0022268a?id=20190118001

Request Parameters
(Query String)
- id: (int)

Response Structure
```
    {
        "data": {
            "id": (int),
            "subject": (string),
            "content": (Markdown Text: string)
        }
    }
```
---
## Create Article API

API mock url: http://www.mocky.io/v2/5e22ea392f00009a00222634

Method: POST

Request Parameters
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
        "result": "success"
    }
```
---
## Update Article API

API mock url: http://www.mocky.io/v2/5e22ea392f00009a00222634

Method: PUT

Request Parameters
(JSON)
``` 
{
    "id": (int),
    "subject": (string),
    "content": (string)
}
``` 

Response Structure
```
    {
        "result": "success"
    }
```