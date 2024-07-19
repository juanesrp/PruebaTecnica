# 🚀 Proyecto CRUD con Spring Boot y PostgreSQL


![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)


Este proyecto demuestra una robusta aplicación CRUD (Create, Read, Update, Delete) desarrollada con Spring Boot y PostgreSQL, ofreciendo una base sólida para operaciones de gestión de datos.


## 📋 Requisitos Previos


Asegúrate de tener instalado lo siguiente antes de comenzar:


- ☕ JDK 11 o superior
- 🛠️ Maven 3.3 o superior
- 🐘 PostgreSQL 9.6 o superior


## 🛠️ Configuración del Proyecto


### Después de clonar el proyecto


1. Abre tu editor o IDE favorito (como IntelliJ IDEA, Eclipse, o VS Code).
2. Importa el proyecto como un proyecto Maven existente.
3. Permite que el IDE descargue todas las dependencias necesarias.


## 🚀 Ejecutando la Aplicación


1. Configura la base de datos PostgreSQL en `src/main/resources/application.properties`.
2. Ejecuta la aplicación usando Maven:`mvn spring-boot:run`
3. La API estará disponible en `http://localhost:8080`.


## 💾 Carga Inicial de Datos


Actualmente, la carga automática de datos iniciales no está funcionando como se esperaba. Por favor, sigue estos pasos para cargar los datos iniciales:


1. Localiza el archivo `data.sql` en la carpeta `src/main/resources/`.
2. Abre tu cliente de PostgreSQL preferido (por ejemplo, pgAdmin).
3. Conéctate a la base de datos del proyecto.
4. Ejecuta manualmente las sentencias SQL que se encuentran en el archivo `data.sql`.

