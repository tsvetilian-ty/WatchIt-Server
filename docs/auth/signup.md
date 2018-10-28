# Sign Up

Used to register users into the system.

**URL** : `/api/v1/users/signup`

**Method** : `POST`

**Token required** : No

**Data constraints**

```json
{
    "user_name": "[username]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "user_name": "tsvetilian",
    "email": "tsvetilian.ty@gmail.com",
    "password": "123456789"
}
```

## Success Response

**Code** : `201 Created`

**Content example**

```json
{
    "username": "tsvetilian",
    "email": "tsvetilian.ty@gmail.com",
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** :  If 'email' or 'password' is not provided.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": {
        "message": "Required field is missing or empty!"
    }
}
```
