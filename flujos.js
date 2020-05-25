const fs = require('fs');
class flujos {
    ejemploBuffer() {
        //ejemplo de creacion de un buffer vacio de tamanho 20 bytes
        const buffer_vacio = Buffer.alloc(20);
        console.log(buffer_vacio.toString());
        const buffer_cadena = Buffer.from("@ emi riberalta");
        console.log(buffer_cadena.toString());
        const buffer_archivo = Buffer.from('db.txt');
        console.log(buffer_archivo.toString())
    }

    ejemploStream() {
        const ruta_archivo = 'db.txt'
        const stream_lectura = fs.createReadStream(ruta_archivo, { autoClose: true })
        /*
        stream_lectura.on('data', (chunk) => {
            console.log(chunk.toString().length)
        })
        */
        //console.log(stream_lectura)
        const listenerChunks = (chunk) => {
            console.log(chunk.toString().length)
        }
        stream_lectura.on('data', listenerChunks)
    }
    ejemploStreamArchivo() {
        const argumentos = process.argv
        console.log(argumentos)
        const ruta_archivo = process.argv[2];
        const stream = fs.createReadStream(ruta_archivo, 'utf-8');
        stream.on('data', (chunk) => {
            console.log(chunk.length + ' bytes')
        })
    }
    ejemploStreamWrite() {
        const argumentos = process.argv
        console.log(argumentos)
        const ruta_archivo = process.argv[2];
        const stream = fs.createWriteStream(ruta_archivo, 'utf-8');
        stream.on('data', (chunk) => {
            console.log(chunk.length + ' bytes')
        })
    }
}

const f = new flujos();
//f.ejemploBuffer();
f.ejemploStreamArchivo()