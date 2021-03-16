
# Prueba R2D FrontEnd

### [Demo](www.alancamcho.com) | [Github](https://github.com/leonel1672/Harvard-museum)

## Empezando

### Correr el proyecto

Para visualizar el proyecto ejecutamos en la terminal  
* **docker pull leonel1672/harvardmuseum** 

Una ves descargado el contenerdor ejecutamos  
* **docker run --rm -it  -p 80:80/tcp leonel1672/harvardmuseum:v1**  

Ya iniciado escribimos en el navegador [localhost](http://localhost/)

### Requerimientos

* [Node](www.nodejs.org) v12 o posterior
* [Angular CLI](https://cli.angular.io/)

### Inicio de proyecto

* Instalar dependencias con **npm install**
* Ejecutar **ng serve**
* Navega a [http://localhost:4200/](http://localhost:4200/) . La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

### Construyendo el proyecto

Ejecutar **ng build** para construir el proyecto. Los artefactos de construcción se almacenarán en el dist/directorio

### Pruebas unitarias

Ejecutar **ng test** para iniciar y **ng test --code-coverage** para correr pruebas unitarias y generar la carpeta de **coverage** donde se crearan los reportes de covertura

### Puebas e2e

Ejecutar **ng e2e** para iniciar  

### Descripcion de la funcionalidad

La aplicacion es un ejemplo de una galeria de obras de arte que se sirve de la API del sitio de [Harvard Museum](https://harvardartmuseums.org/collections/api) mediante un infinite scroll











