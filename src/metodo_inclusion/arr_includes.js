/*
* arr_includes - El método includes() determina si un array contiene un determinado elemento, devolviendo true o false según corresponda.
*/
export const arr_includes = () => {
  // Definimos un array de frutas.
  const frutas = ["Manzana", "Banana", "Pera", "Naranja"];
  
  // Usamos includes() para verificar si el array contiene "Pera".
  const contiene = frutas.includes("Pera");

  // Resultado
  console.log(`¿El array contiene "Pera"? ${contiene}`); // ¿El array contiene "Pera"? true
};