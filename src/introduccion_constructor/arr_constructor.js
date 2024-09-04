/**
 * arr_constructor - Función que demuestra la creación y manipulación básica de arrays utilizando el constructor Array() en JavaScript.
 */
export const arr_constructor = () => {
  // Crea un array llamado 'frutas' utilizando el constructor Array() con tres elementos.
  const frutas = new Array("Manzana", "Banana", "Pera");
  
  // Muestra el array completo.
  console.log("Frutas:", frutas);
  
  // Muestra el primer elemento.
  console.log("Primer elemento:", frutas[0]);
  
  // Muestra el segundo elemento.
  console.log("Segundo elemento:", frutas[1]);
  
  // Muestra el tercer elemento.
  console.log("Tercer elemento:", frutas[2]);
  
  // Muestra el array con un nuevo elemento "Piña" añadido al final.
  console.log("Añadido 'Piña':", [...frutas, "Piña"]);
}