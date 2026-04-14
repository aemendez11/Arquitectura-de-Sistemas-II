// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Autor {
    id: ID!
    nombre: String!
    nacionalidad: String!
    fechaNacimiento: String!
    vivo: Boolean!
    email: String!
    librosPublicados: Int!
    libros: [Libro!]!
  }

  type Libro {
    id: ID!
    titulo: String!
    autorId: ID!
    genero: String!
    anio: Int!
    paginas: Int!
    disponible: Boolean!
    idioma: String!
    isbn: String!
    calificacion: Float!
    autor: Autor!
  }

  type Query {
    # Queries de Libros
    libros: [Libro!]!
    libro(id: ID!): Libro
    librosPorGenero(genero: String!): [Libro!]!
    librosDisponibles: [Libro!]!

    # Queries de Autores
    autores: [Autor!]!
    autor(id: ID!): Autor
    autoresPorNacionalidad(nacionalidad: String!): [Autor!]!
  }
`;

module.exports = { typeDefs };