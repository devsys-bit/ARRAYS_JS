/*
* arr_findLast - El método findLast() devuelve el último elemento en el array que cumple con la condición especificada.
*/
export const arr_findLast = () => {
  // Definimos un array de números.
  const numeros = [5, 12, 8, 130, 44];

  // Usamos findLast() para buscar el último número mayor a 10.
  const encontrado = numeros.findLast((num) => num > 10);

  // Resultado
  console.log(`El último número mayor a 10 es: ${encontrado}`); // El último número mayor a 10 es: 44
};