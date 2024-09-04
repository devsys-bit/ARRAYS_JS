/*
* arr_entries - Utiliza Array.prototype.entries() para obtener y mostrar pares índice-valor de un array.
*/
export const arr_entries = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Obtiene un iterador de pares índice-valor.
  const entries = frutas.entries();
  
  // Itera sobre cada par índice-valor.
  for (let [index, value] of entries) {
    // Muestra el índice y el valor en la consola.
    console.log(index, value);
  }
};