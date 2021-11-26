# API-PETS
Proporciona varios de endpoints para realizar las operaciones sobre las diferentes entidades. User, Profile, Pet, Messages (todavía no implementado). 
La base de datos que se utiliza es mongodb.Se esta haciendo uso de el framework expres y se acompaña de varias librerias instaladas con npm, con el package.json se 
instalan de forma automática.

## MÓDULOS
### USER
#### POST
```
/users
```
Crea un nuevo usuario en la base de datos. Recibe en formato json varios datos, username es obligatorios, ejemplo:
```json
{
    "username": "user123", 
    "password": "123", 
    "email": "user123@test.com",
    "names": "user",
    "date": "",
    "about": "Lorem ...",
    "city": "Quito"
}
```
## Profile
### PUT
```
/profiles
```
Actualiza los datos del perfil de un usuario.

### GET
```
profiles/:profile 
```
Recibe como parámetro el id de un perfil de un usuario y retorna los datos del mismo.

## PET
```
/pets
```
Recibe en el body los datos de una mascota y entre ellos el id del usuario que lo sube (dueño).
```json
{
    "user": "id",
    "name": "Bola de Pelos",
    "dateBorn": "",
    "city": "Quito",
    "description": "Blanco, grande, come mucho...",
    "adoption": "true",
    "pictures":""
}
```
## Login
```
/login 
```
Permite la autenticación del usuario. Este regresa un token de acceso que es necesario para las rutas protegidas del api.
```json
{
    "username": "user123",
    "password": "123"
}
```





