/*
* arr_find - El método find() devuelve el primer elemento en el array que cumple con la condición especificada.
*/
export const arr_find = () => {
  // Definimos un array de números.
  const numeros = [5, 12, 8, 130, 44];

  // Usamos find() para buscar el primer número mayor a 10.
  const encontrado = numeros.find((num) => num > 10);

  // Resultado
  console.log(`El primer número mayor a 10 es: ${encontrado}`); // El primer número mayor a 10 es: 12
};