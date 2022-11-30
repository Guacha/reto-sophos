# Valiant Games

Valiant Games es un ejemplo para una tienda de alquiler de videojuegos muy sencilla. El aplicativo está construido en Angular + ExpressJS, Usa una base de datos (Pre desplegada) en Postgresql.

# Prerrequisitos

Para poder ejecutar ambos componentes que el aplicativo requiere en su máquina, es necesario primero hacer la instalación de las dependencias. Para esto, se pueden ejecutar la siguiente secuencia de comandos desde la carpeta raíz:

    cd valiant-games-back
    npm install
    cd ../valiant-games-front
    npm install

Una vez ejecutados los comandos. Ya debería tener todas las dependencias para ejecutar el proyecto.

# Ejecución Backend

Para ejecutar el backend, es primero necesario ubicarnos en la subcarpeta del proyecto de back, a partir de la carpeta raíz del proyecto:

    cd valiant-games-back

Ahora, ejecutamos un comando para generar el cliente de prisma, así como realizar un seed inicial a la base de datos:

    npm run preparedb

Finalmente, ya se procede a la ejecución del back, para esto, simplemente es necesario ejecutar `npm start` o `npm run start` (Si se cuenta con nodemon, se puede usar el comando `npm run dev`)

# Ejecución Frontend

Para la ejecución del aplicativo frontend, se debe hacer uso del [Angular CLI](https://angular.io/guide/setup-local), si no se tiene, no se podrá ejecutar.

Asumiendo que ya lo tenga instalado (Si no lo tiene, revisar [Este enlace](https://angular.io/guide/setup-local)), se puede usar el comando para abrir la aplicación `ng serve --open`. Esto abrirá una ventana nueva del explorador en la que se podrá hacer uso del aplicativo.

# Utilización

Para la utilización, se puede usar en su totalidad, sin embargo, ya existen algunos usuarios creados, para facilidad del usuario:
|USUARIO LOGIN|CONTRASEÑA |
|--|--|
|user@user.com|user|
