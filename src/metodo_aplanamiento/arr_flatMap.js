/*
* arr_flatMap - flatMap() aplica una función a cada elemento y luego aplana el resultado en un solo array.
*/
export const arr_flatMap = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];
  
  // Usamos flatMap para transformar cada fruta en un array de letras y luego aplanar el resultado.
  const resp = frutas.flatMap((fruta) => {
    return fruta.split(""); // Divide cada fruta en un array de letras
  });

  // Resultado
  console.log(resp); // ["M", "a", "n", "z", "a", "n", "a", "B", "a", "n", "a", "n", "a", "P", "e", "r", "a"]
};