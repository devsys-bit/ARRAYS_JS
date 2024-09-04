/**
 * arr_isArray - Verifica si una variable es un array usando Array.isArray().
 */
export const arr_isArray = () => {
  // Crea un array llamado 'frutas' con tres elementos.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Verifica si 'frutas' es un array.
  const esArray = Array.isArray(frutas);
  
  // Muestra en consola el resultado de la verificación con un mensaje explicativo.
  console.log("¿'frutas' es un array?:", esArray); // true

  // Verifica si la cadena "No soy un array" es un array.
  const noEsArray = Array.isArray("No soy un array");
  
  // Muestra en consola el resultado de la verificación con un mensaje explicativo.
  console.log("¿'No soy un array' es un array?:", noEsArray); // false
};