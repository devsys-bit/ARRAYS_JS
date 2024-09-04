/*
* arr_toReversed - toReversed() devuelve un nuevo array con el orden de los elementos invertido.
*/
export const arr_toReversed = () => {
  // Definir un array de números
  const numeros = [10, 20, 30, 40];
  
  // Usar toReversed para invertir el orden de los elementos en el array
  const resp = numeros.toReversed();

  // Resultado
  console.log(`El nuevo array con el orden invertido es: ${JSON.stringify(resp)}`); // [40, 30, 20, 10]
};