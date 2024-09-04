/*
* arr_flat - flat() aplana un array de arrays en un solo nivel.
*/
export const arr_flat = () => {
  // Define el array 'frutas' con un array de letras para cada fruta.
  const frutas = [["M", "a", "n", "z", "a", "n", "a"], ["B", "a", "n", "a", "n", "a"], ["P", "e", "r", "a"]];
  
  // Usamos flat para aplanar el array de arrays en un solo nivel.
  const resp = frutas.flat();

  // Resultado
  console.log(resp); // ["M", "a", "n", "z", "a", "n", "a", "B", "a", "n", "a", "n", "a", "P", "e", "r", "a"]
};