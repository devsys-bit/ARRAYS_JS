# Manipulación efectiva de Arrays en JavaScript

La rama `propiedades_estaticas` del repositorio amplía las funcionalidades para proporcionar una comprensión profunda de las propiedades estáticas de los arrays en JavaScript, específicamente explorando `Symbol.species`. Esta rama incluye un submenú que permite explorar conceptos básicos, así como la manipulación de arrays utilizando propiedades estáticas.

## Pasos para comenzar

Para configurar el entorno y ejecutar el script desde la rama `propiedades_estaticas`, sigue estos pasos:

1. **Clona la rama propiedades_estaticas a tu máquina local**:

  ```bash
  git clone --branch propiedades_estaticas https://github.com/devsys-bit/arrays_js.git
  ```

2. **Navega al directorio del proyecto**:

  ```bash
  cd arrays_js
  ```

3. **Instala las dependencias necesarias**:

  ```bash
  npm install
  ```

4. **Inicia el script**:

  ```bash
  npm start
  ```

## Detalle del Script

El script en la rama `introduccion_constructor` realiza lo siguiente:

1. **Menú Principal**:
    - Muestra las siguientes opciones:
      ```
      Menú principal:
      ---------------
      0. Salir
      1. Introducción al Array
      2. Introduccion al Constructor
      3. Propiedades estáticas
      Opción:
      ```
    - **Opción 0**: Sale del programa.
    - **Opción 1**: Navega al submenú de Introducción al Array.
    - **Opción 2**: Navega al submenú de Introducción al Constructor.
    - **Opción 3**: Navega al submenú de Propiedades estáticas.

2. **Submenú de Introduccion al Constructor**:
    - Una vez seleccionada la opción 3, el submenú se muestra con las siguientes opciones:
      ```
      Submenú de Propiedades estáticas:
      ---------------------------------

      0. Menú principal
      1. Array[@@species]
      Opción:
      ```
    - **Opción 0**: Regresa al menú principal.
    - **Opción 1**: Ejecuta la función que demuestra `Array[@@species]`.

3. **Función `arr_species`**:
    - **Crea una instancia de una subclase de Array** llamada `ArraySpecies`.
    - **Crea un array `a`** como una instancia de `ArraySpecies`.
    - **Verifica y muestra** si `a` es una instancia de `ArraySpecies` y si es una instancia de `Array`.
    - **Crea un array `b`** como una instancia regular de `Array`.
    - **Verifica y muestra** si `b` es una instancia de `ArraySpecies` y si es una instancia de `Array`.

## Autor

- **DERLYS DANIEL ALVARADO MENDOZA**