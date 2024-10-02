function convertirSegundos(segundos) {
    if (!Number.isInteger(segundos) || segundos < 0) {
        console.log("ingresa un número entero no negativo.");
        return;
    }

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    console.log(`${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`);
}

convertirSegundos(5000); 
convertirSegundos(10000);  
convertirSegundos(15937);