/*
 * arr_indexOf - El método indexOf() devuelve el primer índice en el que se puede encontrar un elemento en el array, o -1 si el elemento no está presente.
 */
export const arr_indexOf = () => {
  // Definimos un array de frutas.
  const frutas = ["Manzana", "Banana", "Pera", "Naranja"];
  
  // Usamos indexOf() para encontrar el índice de "Banana".
  const indice = frutas.indexOf("Banana");

  // Resultado
  console.log(`El índice de "Banana" es: ${indice}`); // El índice de "Banana" es: 1
};