/*
* arr_values - Utiliza Array.prototype.values() para obtener y mostrar los valores del array.
*/
export const arr_values = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Obtiene un iterador de los valores del array.
  const values = frutas.values();
  
  // Itera sobre cada valor del array.
  for (let value of values) {
    // Muestra el valor en la consola.
    console.log(value);
  }
};