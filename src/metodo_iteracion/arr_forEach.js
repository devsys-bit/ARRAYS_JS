/*
* arr_forEach - Utiliza Array.prototype.forEach() para iterar sobre cada elemento y mostrar índice y valor.
*/
export const arr_forEach = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Itera sobre cada elemento del array.
  frutas.forEach((value, index) => {
    // Muestra el índice y el valor en la consola.
    console.log(index, value);
  });
};