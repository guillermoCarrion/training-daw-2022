function tipotriangulo(a, b, c) {
    if ( a<=0 || b<=0 || c<=0) {
        return "Los lados deben ser mayores que cero";
    }

    if ( a==b && b==c ) {
        return "Equilatero.";
    } else if ( a==b || b==c || a==c) {
        return "Isósceles.";
    } else {
        return "Escaleno.";
    }
}

let p1 = { x: 0, y: 0 }
let p2 = { x: 4, y: 0 }
let p3 = { x: 3, y: 10}

function tipoTriCoordenadas(p1, p2, p3) {
    
    const c1 = (p2.x -p1.x)
    const c2 = (p2.y - p1.y)
    
    
    const d1 = (p2.x -p1.x) + (p2.y - p1.y)
    
    console.log(`D1 ${d1}`);

    console.log( `${p1.x}` - `${p1.y}`);


}


tipoTriCoordenadas(p1, p2, p3)

console.log(tipotriangulo(1, 2, 3));
console.log(tipotriangulo(4, 7, 10));
console.log(tipotriangulo(5, 5, 5));
console.log(tipotriangulo(5, 5, 7));
console.log(tipotriangulo(5, 5, -7));