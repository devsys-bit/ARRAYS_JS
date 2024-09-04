/**
 * arr_inicio - Función que demuestra la creación y manipulación básica de arrays en JavaScript.
 */
export const arr_inicio = () => {
  // Crea un array llamado 'frutas' con tres elementos.
  const frutas = ["Manzana", "Banana", "Pera"];
  
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