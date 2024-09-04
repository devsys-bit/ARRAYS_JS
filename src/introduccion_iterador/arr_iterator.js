/**
 * arr_iterator - Demuestra cómo usar el iterador de un array en JavaScript.
 */
export const arr_iterator = () => {
  // Crear un array de frutas
  const frutas = ["Manzana", "Banana", "Pera"];

  // Obtener el iterador del array usando Symbol.iterator
  const iterator = frutas[Symbol.iterator]();

  // Imprimir el primer elemento del array
  console.log("Primer elemento:", iterator.next().value); // Imprime: "Manzana"

  // Imprimir el segundo elemento del array
  console.log("Segundo elemento:", iterator.next().value); // Imprime: "Banana"

  // Imprimir el tercer elemento del array
  console.log("Tercer elemento:", iterator.next().value); // Imprime: "Pera"
}