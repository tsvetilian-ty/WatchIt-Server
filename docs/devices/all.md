# Get list of devices

Shows a list of all devices of a user

**URL** : `/api/v1/devices`

**Method** : `GET`

**Token required** : Yes

## Success Response

**Code** : `200 OK`

## Error Response

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
