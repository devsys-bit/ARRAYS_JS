/*
* arr_findIndex - El método findIndex() devuelve el índice del primer elemento en el array que cumple con la condición especificada.
*/
export const arr_findIndex = () => {
  // Definimos un array de números.
  const numeros = [5, 12, 8, 130, 44];

  // Usamos findIndex() para encontrar el índice del primer número mayor a 10.
  const indice = numeros.findIndex((num) => num > 10);

  // Resultado
  console.log(`El índice del primer número mayor a 10 es: ${indice}`); // El índice del primer número mayor a 10 es: 1
};