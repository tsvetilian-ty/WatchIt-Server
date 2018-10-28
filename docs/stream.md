# Start stream to a particular device

**URL** : `/api/v1/play`

**Method** : `POST`

**Auth required** : Yes

**Data constraints**

```json
{
    "file_name": "[real name and ext of the file to stream]",
    "play_from": "[IP on the local network to access the sender]",
    "key": "[The AuthKey to access the file]",
    "source_name": "[The name of the machine that initiated the stream]",
    "play_on": "[Devie ID]",
    "content_path": "[The path to the file]",
    "poster": "[Poster]",
    "name": "[Presentable name of the file]",
    "description": "[Plot description]",
    "time": "[Content Playtime]",
    "season": "[Season information (if exists)]",
}
```

## Success Response

**Code** : `200 OK`


## Error Response

**Condition** : If 'name', 'type' or 'broadcast' are not provided.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": {
        "message": "Required field is missing or empty!"
    }
}
```
# 
**Condition** : If token is invalid.

**Code** : `401 Unauthorized`

**Content** :

```json
{
    "error": {
        "message": "Invalid token!"
    }
}
```
# 
**Condition** : If device is not found.

**Code** : `404 Not Found`

**Content** :

```json
{
    "error": {
        "message": "Invalid Device!"
    }
}
```
