Introducción
    Hicie una lista de tareas usando tres contenedores Docker,
    cada uno para un trabajo diferente. El primer cuadro 
    guarda todos los trabajos que las personas hacen, 
    cambian o eliminan. El segundo cuadro maneja el trabajo 
    detrás de escena de la aplicación, como pensar y hablando 
    con la base de datos. El sistema back-end está diseñado 
    usando Node.js y depende de un contenedor MySQL para 
    manejar los datos. A través de esta interfaz, los 
    usuarios pueden ver, agregar y eliminar tareas. Los 
    tres cuadros ayudan a que la aplicación funcione 
    correctamente, asegurándose todo funciona en conjunto 
    sin problemas.



Una vez abierto el codigo de la aplicacion ejecutamos los 
contenedores de la siguiente forma:

    docker-compose up --build

Ademas si queremos ver las diferentes parte en local 
ponemos ete codigo en el navegador 
    Backend:  
        http://localhost:3000.

    Frontend: 
        http://localhost:3001.

    phpMyAdmin: 
        http://localhost:8080 


Como se ve la estructura de mi ejercicio
Anteriormente en mi presentación cometí el error de tener mal el código introduciendo el frontend dentro del backend siendo este 
el error crucial que hizo que no se pudiera ver, al saber ya esto la solución y como estaba planificado al sacar el frontend
obteniendo así el tercer Contenedor Backend / Frontend / BaseDeDatos
Como se ve la enstructura de mi ejercicio
    task-list-app/
    │
    ├── backend/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── app.js  # Archivo principal del backend
    │   ├── package.json
    │   └── Dockerfile  # Dockerfile para el backend
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── App.js  # Archivo principal del frontend
    │   │   └── index.js
    │   ├── package.json
    │   └── Dockerfile  # Dockerfile para el frontend
    │
    ├── docker-compose.yml  # Archivo de configuración para todos los servicios Docker
    └── README.md  # Descripción del proyecto

Como funciona:

    Dockerfile del Backend (Node.js):
        Este Dockerfile utiliza una imagen de Node.js 
        para construir y ejecutar la aplicación backend. 
        Primero, define el directorio de trabajo, copia
        los archivos de configuración de dependencias (
        package.json), las instala y luego copia el resto
        del código. Finalmente, expone el puerto 3000 y 
        ejecuta la aplicación usando npm start.

    Dockerfile del Frontend (React):

        El Dockerfile del frontend construye 
        la aplicación de React usando Node.js y 
        uego usa una imagen de NGINX para servir 
        la aplicación como archivos estáticos. Se 
        copian los archivos de configuración, se 
        instalan las dependencias, se construye la
        app y luego los archivos resultantes son 
        servidos por NGINX en el puerto 80.

            (NGINX es un servidor web de alto
            rendimiento que se utiliza para servir 
            aplicaciones, gestionar la carga del tráfico, 
            y actuar como proxy inverso )


    Docker Compose 
        es una herramienta que te 
        permite definir y ejecutar múltiples contenedores 
        de Docker como un solo servicio. 
        En un archivo YAML (docker-compose.yml), 
        describes los contenedores que necesitas,
        sus configuraciones, redes, y volúmenes. 
        Luego, con un solo comando (docker-compose up), 
        Docker Compose despliega y coordina todos esos 
        contenedores de forma conjunta.
