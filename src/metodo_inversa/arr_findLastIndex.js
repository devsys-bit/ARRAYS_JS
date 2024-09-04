/*
* arr_findLastIndex - El método findLastIndex() devuelve el índice del último elemento en el array que cumple con la condición especificada.
*/
export const arr_findLastIndex = () => {
  // Definimos un array de números.
  const numeros = [5, 12, 8, 130, 44];

  // Usamos findLastIndex() para encontrar el índice del último número mayor a 10.
  const indice = numeros.findLastIndex((num) => num > 10);

  // Resultado
  console.log(`El índice del último número mayor a 10 es: ${indice}`); // El índice del último número mayor a 10 es: 4
};
