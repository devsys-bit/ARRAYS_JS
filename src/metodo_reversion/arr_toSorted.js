/*
* arr_toSorted - toSorted() devuelve un nuevo array con los elementos ordenados.
*/
export const arr_toSorted = () => {
  // Define el array 'frutas'.
  const frutas = ["Pera", "Manzana", "Banana", "Aguacate", "Durazno"];

  // Usamos toSorted para ordenar los elementos del array alfabéticamente.
  const resp = frutas.toSorted();

  // Resultado
  console.log(`El nuevo array ordenado es: ${JSON.stringify(resp)}`); // ["Aguacate", "Banana", "Durazno", "Manzana", "Pera"]
};