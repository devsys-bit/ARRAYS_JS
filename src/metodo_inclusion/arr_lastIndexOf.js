/*
 * arr_lastIndexOf - El método lastIndexOf() devuelve el último índice en el que un elemento dado puede encontrarse en el array, o -1 si el elemento no está presente.
 */
export const arr_lastIndexOf = () => {
  // Definimos un array de números con elementos repetidos.
  const numeros = [5, 12, 8, 130, 12, 44];
  
  // Usamos lastIndexOf() para encontrar el último índice del número 12.
  const ultimo = numeros.lastIndexOf(12);

  // Resultado
  console.log(`El último índice del número 12 es: ${ultimo}`); // El último índice del número 12 es: 4
};