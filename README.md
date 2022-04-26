# dictionary-dogs

* [1. Objetivo del proyecto ](#1-Objetivo-del-proyecto)
* [2. Implementación](#2-Implementación)
* [3. Dev tools & stack](#3-Dev-tools-stack)


## 1. Objetivo del proyecto
Este proyecto fue creado para llevar el conocimiento de perritos a los usuarios pet lovers. Está consumiento una API de información general sobre razas de perritos descrita de esta manera. Para tener mejor calidad de datos en los valores faltantes de información se asigno un atributo para que no afectará en la visualización de las tarjetas.

```
dogs: {
    bred_for: string,
    breed_group: string,
    id: number,
    image: {
      height: number,
      id: string,
      url: string,
      width: number,
    },
    life_span: string,
    name: string,
    origin: string,
    reference_image_id: string,
    temperament: string,
    }  
```
## 2. Implementación 

#### Paginación: 
Al consumir demasiada información se realiza una paginación sencilla al final de la pagina para navegar por grupo de 10 tarjetas la información. Este componente se realizo con Bootstrap.

#### Filtro: 
El filtro lo realiza por el grupo de raza que se declaro en la API como ```breed_group``` y trae la información a pantalla de los perritos que cumplan con el valor filtrado.

#### Responsive: 
Se procura tener buena visualización en dos tipos de pantallas la pantalla movil y la patalla desktop, el proceso de desarrollo se empezó desde la pantalla más pequeña y se modificó para la pantalla más grande. 

## 3. Dev tools & stack

HTML | CSS | React | Typescript | gh-pages

Abril, 2022
