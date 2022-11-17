# Gestion de usuatios

## Resumen

Desarrollo de una aplicacion para la gestion de usuarios de una aplciacion web.

## Definicion de entidades

* **Usuario:** Usuario registrado en la plataforma
   * Nombre minimo 2 caracteres y maximo 20 
   * Apellidos: minimo 4 caracteres y maximo 20 
   * Email: debe cumplir el **RFC 5322**
   * Contraseña: minimo 10 maximo 25 ( al menos una minuscula , mayuscula y un numero)

## Requisitos funcionales

* El usuario podra registrarse en la aplicacion, introduciendo los datos necesarios.
   * El email debe ser unico por cada usuario.
* El usuario podra autenticarse ante la aplicacion utilizando su email y contraseña.
   * si la autenticacion es valida, la aplicacion le devolvera al usuario un token que servira para demostrar su identidad ante la app cuando quiera cambiar/eliminar sus datos.
* El usuario podra obtener todos sus datos exceptuando su contraseña, utilizando su identificador.
* El usuario podra actualizar su nombre y apellidos, sera necesario el identificador.
* El usuario podra actualizar su email , sera necesario el identificador y la contraseña actual.
* El usuario podra actualizar su contraseña , sera necesario el identificador y la contraseña actual.
* El usuario podra eliminar todos sus datos de la plataforma, sera necesario el identificador y la contraseña actual.

