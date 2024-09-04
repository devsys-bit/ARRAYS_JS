/*
 * arr_fromAsync - Utiliza Array.fromAsync() para crear un array a partir de un iterable de promesas.
 * Espera a que todas las promesas en el iterable se resuelvan antes de crear el array.
 */
export const arr_fromAsync = async () => {
  // Define un array de promesas que se resolverán con los nombres de las frutas.
  const frutasPromises = [
    Promise.resolve("Manzana"), // Primera promesa resuelta con "Manzana".
    Promise.resolve("Banana"),  // Segunda promesa resuelta con "Banana".
    Promise.resolve("Pera"),    // Tercera promesa resuelta con "Pera".
  ];

  // Usa Array.fromAsync para esperar a que todas las promesas se resuelvan y crear un array con los resultados.
  const frutas = await Array.fromAsync(frutasPromises);
  
  // Muestra en consola el array de frutas con un mensaje explicativo.
  console.log("Array creado con Array.fromAsync a partir de promesas:", frutas); // ['Manzana', 'Banana', 'Pera']
};
