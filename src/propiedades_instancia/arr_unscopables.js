/*
* arr_unscopables - Esta función muestra el valor de la propiedad Symbol.unscopables en el prototipo de Array.
*/
export const arr_unscopables = () => {
  // Imprime el valor de la propiedad Symbol.unscopables en el prototipo de Array.
  console.log('Array.prototype[Symbol.unscopables]:');
  console.log(Array.prototype[Symbol.unscopables]); 
};