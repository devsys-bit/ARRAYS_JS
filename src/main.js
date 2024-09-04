// Importa las funciones de utilidad
import { fetchInput, pause, closeRead } from "./common/common.js";

const main = async () => {

  // Pide un mensaje al usuario
  const mensaje = await fetchInput("Escriba un mensaje: "); 
  
  // Muestra el mensaje ingresado
  console.log("El mensaje es: ", mensaje); 
  
  // Espera a que el usuario presione Enter
  await pause(); 
  
  // Cierra la interfaz de lectura
  closeRead(); 
}

// Llama a la función principal
main(); 
