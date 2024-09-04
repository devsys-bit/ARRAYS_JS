import readline from "readline";

// Crea la interfaz de lectura.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Entrada del usuario
export const fetchInput = (query) => {
  // Promesa para obtener entrada del usuario
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input.trim());
    });
  });
};

// Pausa
export const pause = () => {
  // Promesa para pausar la ejecución hasta que se presione Enter
  return new Promise((resolve) => {
    rl.question("\nPresione Enter para continuar...", () => {
      resolve();
    });
  });
};

// Cerrar readline
export const closeRead = () => {
  // Cierra la interfaz readline
  rl.close();
};
