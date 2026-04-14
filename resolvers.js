// resolvers.js
const { autores, libros } = require('./data');

const resolvers = {
  Query: {
    // Libros
    libros: () => libros,
    libro: (_, { id }) => libros.find(l => l.id === id) || null,
    librosPorGenero: (_, { genero }) =>
      libros.filter(l => l.genero.toLowerCase().includes(genero.toLowerCase())),
    librosDisponibles: () => libros.filter(l => l.disponible),

    // Autores
    autores: () => autores,
    autor: (_, { id }) => autores.find(a => a.id === id) || null,
    autoresPorNacionalidad: (_, { nacionalidad }) =>
      autores.filter(a => a.nacionalidad.toLowerCase().includes(nacionalidad.toLowerCase())),
  },

  // Relaciones
  Libro: {
    autor: (libro) => autores.find(a => a.id === libro.autorId),
  },
  Autor: {
    libros: (autor) => libros.filter(l => l.autorId === autor.id),
  },
};

module.exports = { resolvers };