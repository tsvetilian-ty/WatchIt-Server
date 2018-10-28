# Update FCM token for a device

**URL** : `/api/v1/devices/:deviceId`

**Method** : `PATCH`

**Token required** : Yes

**Data constraints**

```json
{
    "broadcast": "[new fcm token]"
}
```

## Success Response

**Code** : `204 No Content`

**Content example**

```json
{}
```

## Error Response

**Condition** : If 'token' is empty or missing.

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
