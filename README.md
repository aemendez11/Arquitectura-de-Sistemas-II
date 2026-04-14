# API GraphQL — Biblioteca

API GraphQL pública desarrollada con Node.js y Apollo Server como parte de la asignación 07 del curso Arquitectura de Sistemas II.

## Endpoint Público
< https://graphql-api-production-97a0.up.railway.app/>

## Modelos Disponibles

### Libro
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | ID! | Identificador único |
| titulo | String! | Título del libro |
| autorId | ID! | ID del autor relacionado |
| genero | String! | Género literario |
| anio | Int! | Año de publicación |
| paginas | Int! | Número de páginas |
| disponible | Boolean! | Si está disponible |
| idioma | String! | Idioma original |
| isbn | String! | Código ISBN |
| calificacion | Float! | Calificación (0-5) |

### Autor
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | ID! | Identificador único |
| nombre | String! | Nombre completo |
| nacionalidad | String! | País de origen |
| fechaNacimiento | String! | Fecha de nacimiento |
| vivo | Boolean! | Si está vivo |
| email | String! | Correo de contacto |
| librosPublicados | Int! | Total de libros publicados |

## Cómo Probar

### Opción  Apollo Studio
1. Ir a https://studio.apollographql.com/sandbox/explorer
2. Cambiar la URL a `https://graphql-api-production-97a0.up.railway.app`
3. Escribir la query y presionar Run


```

## Ejemplos de Queries

### Todos los libros con su autor
```graphql
{
  libros {
    titulo
    genero
    calificacion
    autor {
      nombre
      nacionalidad
    }
  }
}
```

### Libros disponibles
```graphql
{
  librosDisponibles {
    titulo
    anio
    calificacion
  }
}
```

### Autor por ID
```graphql
{
  autor(id: "1") {
    nombre
    nacionalidad
    libros {
      titulo
    }
  }
}
```

## Tecnologías
- Node.js
- Apollo Server
- GraphQL
- Railway (despliegue)