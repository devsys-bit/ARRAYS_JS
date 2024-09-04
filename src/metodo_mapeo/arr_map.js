/*
* arr_map - map crea un nuevo array aplicando una función a cada elemento del array original.
*/
export const arr_map = () => {
  // Define el array 'frutas'.
  const frutas = ["Manzana", "Banana", "Pera"];

  // Usamos map para transformar cada fruta en un mensaje.
  const resp = frutas.map((fruta) => {
    return `Me gusta comer ${fruta}`;
  });

  // Resultado
  console.log(resp);
};