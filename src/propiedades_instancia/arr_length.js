/*
* arr_length - Esta función demuestra cómo obtener la longitud de una cadena y un array usando Array.prototype.length.
*/
export const arr_length = () => {
  // Mensaje de saludo.
  const mensaje = 'Hola, Mundo!!!';
  
  // Array de números del 0 al 9.
  const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Imprime la longitud del mensaje, que es la cantidad de caracteres en 'Hola, Mundo!!!'.
  console.log(`Mensaje: ${mensaje}`); 
  console.log(`Longitud del mensaje: ${mensaje.length}\n`); 

  // Imprime la longitud del array 'numero', que es la cantidad de elementos en el array.
  console.log(`Array: ${numero.length}`); 
  console.log(`Longitud del array: ${numero.length}\n`); 
};