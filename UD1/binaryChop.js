function chop(numero, datos) {
    if (datos.length === 0) {
        return -1; 
    }

    let left = 0;
    let right = datos.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (datos[mid] === numero) {
            return mid; // Se encontró el valor, retornar la posición
        }
        if (datos[mid] < numero) {
            left = mid + 1; // Buscar en la mitad derecha
        } else {
            right = mid - 1; // Buscar en la mitad izquierda
        }
    }

    return -1; 
}

function assert_equal(expected, obtained) {
    if (expected !== obtained) {
        console.log(`El valor ${expected} no es ${obtained}`);
    }else{
        console.log(`${expected} igual a ${obtained}`)
    }
}


assert_equal(3, chop(3, [0, 1, 2, 3, 4, 5])); 
/*
assert_equal(-1, chop(3, []));
assert_equal(-1, chop(3, [1])); 
assert_equal(0, chop(1, [1]));   
*/
