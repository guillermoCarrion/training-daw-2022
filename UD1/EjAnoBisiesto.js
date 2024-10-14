function ComprobarBisiesto (year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                console.log("es bisiesto")
            }
        }else{
            console.log("no es bisiesto")
        }
    }else{
        console.log("no es bisiesto")
    }
}

ComprobarBisiesto(400);
ComprobarBisiesto(1);
ComprobarBisiesto(4000);
ComprobarBisiesto(2045);