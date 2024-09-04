/**
 * arr_species - Demuestra el uso de `Symbol.species` para controlar el constructor utilizado en subclases de Array.
 */
export const arr_species = () => {
  // Define una clase llamada `ArraySpecies`
  class ArraySpecies extends Array {
    // Retorna `Array` como el constructor para nuevas instancias
    static get [Symbol.species]() {
      return Array;
    }
  }

  // Crea una instancia de `ArraySpecies`
  const a = new ArraySpecies(1, 2, 3);

  // Crea una instancia de `Array`
  const b = new Array(4, 5, 6);
  
  // Muestra la instancia `a` en la consola
  console.log("\nInstancia 'a':", a);
  // Verifica si `a` es instancia de `ArraySpecies`
  console.log("'a' es instancia de ArraySpecies:", a instanceof ArraySpecies);
  // Verifica si `a` es instancia de `Array`
  console.log("'a' es instancia de Array:", a instanceof Array);

  // Muestra la instancia `b` en la consola
  console.log("\nInstancia 'b':", b);
  // Verifica si `b` es instancia de `ArraySpecies`
  console.log("'b' es instancia de ArraySpecies:", b instanceof ArraySpecies);
  // Verifica si `b` es instancia de `Array`
  console.log("'b' es instancia de Array:", b instanceof Array);
}