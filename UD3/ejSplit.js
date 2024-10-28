const fs = require('node:fs');
const { title } = require('node:process');

let data = fs.readFileSync('ej.csv', 'utf8' )

data = data.split('\n')
            .slice(1)
            .map(row => {
                let rowData = row.split('",')

                return {
                    title: rowData[0],
                    type: rowData[1],
                    
                }
            })


console.log(`data ${data}`);



function leerArchivo (){

}