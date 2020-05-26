const fs = require('fs')
class flujos {
    ejemploBuffer() {
        const buffer_vacio = Buffer.alloc(20);
        console.log(buffer_vacio);
        const buffer_cadena = Buffer.from('@emi@ @riberalta');
        console.log(buffer_cadena);
    }

    ejemploStream() {

    }

    ejemploReadFile(nombre, tipo) {
        /*
        const objeto = {
            nombre: 'juan',
            edad: 45,
            sexo: true
        }
        */
        const ruta = 'texto.txt'
        console.log('iniciando')

        fs.readFile(ruta, (err, data) => {
            console.log(data.toString());
        });

        console.log('finalizando')

        fs.readFileSync()
    }

    leerArchivo = (nombre, tipo) => {

    }
}
const f = new flujos();
f.ejemploReadFile()