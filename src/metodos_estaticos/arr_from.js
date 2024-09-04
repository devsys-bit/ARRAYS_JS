/**
 * arr_from - Crea un array a partir de un objeto iterable usando Array.from().
 */
export const arr_from = () => {
  // Define una cadena de texto.
  const cadena = "Hola, Mundo!!!";
  
  // Crea un array a partir de la cadena, donde cada carácter se convierte en un elemento del array.
  const caracteres = Array.from(cadena);
  
  // Muestra en consola el array resultante con un mensaje explicativo.
  console.log("Array creado con Array.from:", caracteres);
};