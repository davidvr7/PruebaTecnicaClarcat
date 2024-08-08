"# PruebaTecnica" 

# Clarcat API y Frontend

Este proyecto es una solución para la gestión de usuarios y sus departamentos. Incluye una API REST desarrollada con .NET y una interfaz de usuario en Angular.

## Contenidos del Proyecto

1. **Backend**: API REST en .NET.
2. **Frontend**: Angular.
3. **Base de Datos**: MySQL.

## Estructura del Proyecto

- **Backend**:
  - `API`: Proyecto de la API REST en .NET.
  - `Controllers`: Controladores para manejar las peticiones HTTP.
  - `Models`: Clases de modelos para la base de datos.
  - `Data`: Configuración de la base de datos y contexto. 

## Requisitos

- .NET 8.0 o superior
- Node.js y npm, Angular 16
- MySQL 

## Instalación y Configuración

### Backend

1. **Clonar el Repositorio**

   ```sh
   git clone https://github.com/davidvr7/PruebaTecnicaClarcat.git

   *Añadi un Dockerfile para despliegue con docker

### Frontend

Con la interfaz implementare Bootstrap, la version cdn para que sea mas ligero junto a fontawesome.

Cree un favicon con un estilo sencillo, el diseño lo hice tanto con Bootstrap como con cambios manuales y sustituyendo propios estilos de Bootstrap.

En el aside cree un search de los modulos, es funcional y lo implemente con ngModel para variar respecto a los otros formularios.

Utilice un enrutamiento lazy-loading para maximizar el rendimiento lo maximo posible, junto a ello, utilice rxjs para dar valor añadido y mas complejidad, pensando en como evolucionara la aplicacion a futuro, a su vez implementare una paginacion para mejorar el rendimiento de los datos dado su alto volumen

Ademas del CRUD decidi añadir una pagina mas de detalle para aportar valor y una pagina para control de errores como 404 

**Integracion Continua**
Cree un angular-ci.yml ficticio para simular la integracion continua con Azure


![alt text](src/assets/Imagenes/1.png)

![alt text](src/assets/Imagenes/2.png)

![alt text](src/assets/Imagenes/3.png)

![alt text](src/assets/Imagenes/4.png)

![alt text](src/assets/Imagenes/5.png)

![alt text](src/assets/Imagenes/6.png)

![alt text](src/assets/Imagenes/7.png)

![alt text](src/assets/Imagenes/8.png)

![alt text](src/assets/Imagenes/9.png)
