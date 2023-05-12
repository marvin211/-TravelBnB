/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //Especificar los archivos que se van a analizar en busca de clases de tailwind
    "./public/index.html", //Le decimos que analice el index.html
    "./src/**/*.{html,js}" //Le decimos que analice todos los archivos html y js de la carpeta src
  ],

  darkMode: 'class', 

  theme: { // permite personalizar los valores predeterminados de los estilos que se utilizan en los proyectos.
    extend: { //extend dentro del theme, se pueden agregar estilos personalizados que no están incluidos en la configuración predeterminada de Tailwind.

      backgroundImage: { // esta propiedad te permite establecer una imagen de fondo en un elemento de HTML. Dentro de la propiedad backgroundImage, se establecen diferentes nombres de imágenes, como 'sanFrancisco', 'yosemite', 'LA', 'seattle', etc., y se les asigna una URL de imagen. De esta manera, cuando se use la clase bg-sanFrancisco en un elemento HTML, se aplicará la imagen con la URL establecida en la propiedad backgroundImage.
        'sanFrancisco' : "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')"
      },

      // Personalizar la paleta de colores
      backgroundColor : theme =>({ // backgroundColor define la paleta de colores para los fondos de los elementos HTML. En esta configuración, se utiliza una función de flecha que devuelve un objeto con la paleta de colores personalizada, que incluye todos los colores predeterminados de Tailwind CSS y agrega tres colores personalizados: primary, secondary, y terciary.
        ...theme('colors'), //Nos traemos todos los colores nativamente de tailwind
        
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),

      // Textos personalizados
      textColor: { //textColor define la paleta de colores para los textos de los elementos HTML. 
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },

      fontFamily: { //fontFamily en Tailwind CSS se utiliza para definir las fuentes utilizadas en el proyecto.
        
        // "Montserrat" es el nombre de la fuente y "sans-serif" es la familia genérica de fuentes que se utilizará como respaldo en caso de que la fuente personalizada no se pueda cargar o no esté disponible en el dispositivo del usuario.
        
        // Para utilizar la fuente personalizada "Montserrat", se debe agregar la clase "font-Montserrat" al elemento HTML correspondiente.
        
        Montserrat: ['Montserrat', 'sans-serif']
      }
      
      
    },
  },
  plugins: [],
}

