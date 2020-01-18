# API Mock 

## Article List API 

API mock url: http://www.mocky.io/v2/5e22ca582f00002b002225fe

Request Parameters
- N/A

Response Structure
```
    {
        "data": [
            {
                "id": 20190118001,
                "subject": "Article 01",
            },
            {
                "id": 20190118002,
                "subject": "Article 02",
            },
            {
                "id": 20190118003,
                "subject": "Article 03",
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
            "id": 20190118001,
            "subject": "Article 01",
            "content": "#Article 01 `20190118` ``` $> git clone http://localhost:8080/foo.git ```"
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