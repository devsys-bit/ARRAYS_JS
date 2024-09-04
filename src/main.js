// Importa las funciones de utilidad
import { fetchInput, pause } from "./common/common.js";

const opciones = [
  { opc:  0, nombre: "Salir", accion: false },
  { opc:  1, nombre: "Introduccion al Array", accion: () => import("./introduccion_array/index.js") },
  { opc:  2, nombre: "Introduccion al Constructor", accion: () => import("./introduccion_constructor/index.js") },
  { opc:  3, nombre: "Propiedades estáticas", accion: () => import("./propiedades_estaticas/index.js") },
  { opc:  4, nombre: "Métodos estáticos", accion: () => import("./metodos_estaticos/index.js") },
  { opc:  5, nombre: "Propiedades de instancia", accion: () => import("./propiedades_instancia/index.js") },
  { opc:  6, nombre: "Introducción a Iterador", accion: () => import("./introduccion_iterador/index.js") },
  { opc:  7, nombre: "Método de Acceso", accion: () => import("./metodo_acceso/index.js") },
  { opc:  8, nombre: "Método de Iteración", accion: () => import("./metodo_iteracion/index.js") },
  { opc:  9, nombre: "Método de Mapeo", accion: () => import("./metodo_mapeo/index.js") },
  { opc: 10, nombre: "Método de Aplanamiento", accion: () => import("./metodo_aplanamiento/index.js") },
]

// Menú principal
const menu = async () => {
  let opcion;

  while (true) {
    console.clear();
    console.log("Menú principal:");
    console.log("---------------\n");

    opciones.forEach((option) => {
      // Alinea las opciones: `opc` de dos dígitos y `nombre`
      console.log(`${option.opc.toString().padEnd(2, ' ')}. ${option.nombre}`);
    });

    opcion = parseInt(await fetchInput("Opción: "), 10);

    if (opcion === 0) {
      process.exit(0);
    }else if (isNaN(opcion) || opcion < 0 || opcion >= opciones.length) {
      console.log("\nOpción inválida. Intente de nuevo.");
    } else {
      const opc_select = opciones.find(op => op.opc === opcion);
      const { submenu } = await opc_select.accion();
      await submenu();
    }

    await pause();
  }
};

// Funcion principal
const main = async () => {
  await menu();
};

// Llama a la función principal
main(); 
