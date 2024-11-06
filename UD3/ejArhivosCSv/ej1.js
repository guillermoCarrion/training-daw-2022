function leerCSVLocal(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const text = event.target.result;
        const data = parseCSV(text);
        console.log(data); // Muestra el arreglo de objetos en la consola
        resolve(data);
      };
  
      reader.onerror = function() {
        reject(new Error("Error al leer el archivo CSV"));
      };
  
      reader.readAsText(file);
    });
  }
  
  function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
  
    const result = lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  
    return result;
  }
  
  function calcularMediaPrimeraColumna(data) {
    if (data.length === 0) {
      console.log("No hay datos en el archivo CSV");
      return 0;
    }
  
    const primeraColumna = Object.keys(data[0])[0]; // Obtiene el nombre de la primera columna
    const valores = data.map(row => parseFloat(row[primeraColumna])).filter(val => !isNaN(val)); // Filtra valores no numéricos
  
    if (valores.length === 0) {
      console.log("La primera columna no contiene datos numéricos válidos");
      return 0;
    }
  
    const suma = valores.reduce((acc, curr) => acc + curr, 0);
    const media = suma / valores.length;
  
    console.log(`La media de la primera columna (${primeraColumna}) es: ${media}`);
    return media;
  }
  
  // Ejemplo de uso:
  // leerCSVLocal(file).then(data => calcularMediaPrimeraColumna(data)).catch(error => console.error(error));
  
  

  const fs = require('fs')

  function readData(){

  }