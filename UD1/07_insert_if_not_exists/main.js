function insertarElemento(array, elemento, alPrincipio) {
    
    if (!array.includes(elemento)) {
        if (alPrincipio) {
            array.unshift(elemento);
        } else {
            array.push(elemento);
        }
    }
}

let array = ['pera','manzana']
insertarElemento(array, 'pera', false); 
console.log(array); 

insertarElemento(array, 'melon', false); 
console.log(array); 

insertarElemento(array, 'melocoton', true); 
console.log(array); 

