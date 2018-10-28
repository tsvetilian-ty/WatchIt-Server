# Login

User login route

**URL** : `/api/v1/users/login`

**Method** : `POST`

**Token Required** : No

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "emil": "tsvetilian.ty@gmail.com",
    "password": "123456789"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "username": "tsvetilian",
    "email": "tsvetilian.ty@gmail.com"
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If 'email' or 'password' is not provided.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": {
        "message": "Required field is missing or empty!"
    }
}
```

**Condition** : If 'email' or 'password' don't match a user.

**Code** : `422 Unprocessable Entity`

**Content** :

```json
{
    "err": {
        "message": "Authentication failed!"
    }
}
```
