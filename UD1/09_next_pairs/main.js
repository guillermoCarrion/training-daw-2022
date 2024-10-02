function imprimirParesContiguos(numero) {
    if (!Number.isInteger(numero)) {
        console.log("ingresa un número entero.");
        return;
    }

    const limite = Math.abs(numero); 

    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

imprimirParesContiguos(10);  
imprimirParesContiguos(-10); 
imprimirParesContiguos(5);