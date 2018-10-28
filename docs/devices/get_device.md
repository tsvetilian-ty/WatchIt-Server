# Get device

Get a single device

**URL** : `/api/v1/devices/:deviceId`

**Method** : `GET`

**Auth required** : Yes

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 345,
    "name": "Samsung_S9",
    "type": "Android"
}
```

## Error Responses

**Condition** : If Device does not exist with `id` of provided `:deviceId` parameter.

**Code** : `404 NOT FOUND`

**Content** : 

```json
{
  "error": {
    "message": "Device Not Found"
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
