/**
 * arr_of - Crea un array con un número variable de elementos usando Array.of().
 */
export const arr_of = () => {
  // Crea un array de frutas usando Array.of().
  const frutas = Array.of("Manzana", "Banana", "Pera");
  
  // Muestra en consola el array de frutas con un mensaje explicativo.
  console.log("Array creado con Array.of (varios elementos):", frutas); // ['Manzana', 'Banana', 'Pera']

  // Crea un array con un solo elemento.
  const soloUnaFruta = Array.of("Manzana");
  
  // Muestra en consola el array con un solo elemento con un mensaje explicativo.
  console.log("Array creado con Array.of (un solo elemento):", soloUnaFruta); // ['Manzana']
};