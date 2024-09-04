// Importa las funciones de utilidad
import { fetchInput, pause } from "../common/common.js";

// Opciones del submenú
const opciones = [
  { opc: 0, nombre: "Menú principal", accion: false }, // Opción para volver al menú principal
  { opc: 1, nombre: "Array.prototype[@@iterator]()", accion: () => import("./arr_iterator.js").then(m => ({ custom_func: m.arr_iterator })) }
]

// Submenú
export const submenu = async () => {
  let opcion;

  while (true) {
    console.clear();
    console.log("Submenú de Introducción a Iterador:");
    console.log("-----------------------------------\n");

    // Muestra las opciones del submenú
    opciones.forEach((option) =>
      console.log(`${option.opc}. ${option.nombre}`)
    );

    // Obtiene la opción seleccionada del usuario
    opcion = parseInt(await fetchInput("Opción: "), 10);

    // Maneja la opción seleccionada
    if (opcion === 0) {
      break; // Sale del bucle y regresa al menú principal
    } else if (isNaN(opcion) || opcion < 0 || opcion >= opciones.length) {
      console.log("\nOpción inválida. Intente de nuevo."); // Mensaje de error para opción inválida
    } else {
      console.clear();
      const opc_select = opciones.find(op => op.opc === opcion); // Encuentra la opción seleccionada
      const { custom_func } = await opc_select.accion(); // Importa el módulo correspondiente
      await custom_func(); // Ejecuta la función del módulo
    }

    await pause(); // Pausa la ejecución antes de mostrar el menú nuevamente
  }
};
