/*
* arr_keys - Utiliza Array.prototype.keys() para obtener y mostrar los índices del array.
*/
export const arr_keys = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Obtiene un iterador de los índices del array.
  const keys = frutas.keys();
  
  // Itera sobre cada índice del array.
  for (let key of keys) {
    // Muestra el índice en la consola.
    console.log(key);
  }
};
