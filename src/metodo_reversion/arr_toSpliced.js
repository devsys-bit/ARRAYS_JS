/*
 * arr_toSpliced - toSpliced() devuelve un nuevo array donde se han eliminado o reemplazado elementos.
 */
export const arr_toSpliced = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera", "Naranja"];
  
  // Usamos toSpliced para eliminar 2 elementos a partir del índice 1.
  const resp = frutas.toSpliced(1, 2); // Elimina "Banana" y "Pera"
  
  // Resultado
  console.log(`El nuevo array después de eliminar elementos es: ${JSON.stringify(resp)}`); // ["Manzana", "Naranja"]
};