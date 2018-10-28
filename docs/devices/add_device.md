# Add device

**URL** : `/api/v1/devices`

**Method** : `POST`

**Auth required** : Yes

**Data constraints**

```json
{
    "name": "[name of the device]",
    "type": "[type (Android, iOS)]",
    "broadcast": "[FCM token for that device]"
}
```

## Success Response

**Code** : `201 Created`

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
