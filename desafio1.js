/* class Usuario {
    constructor(nombre, apellido, libro, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [libro];
        this.mascota = [mascota];
    }

    getFullname() {
        return `${this.nombre}${this.apellido}`
    }

    addMascota(nuevaMascota) {
        return 'El usuario ahora tiene ' + this.mascota.push(nuevaMascota) + ` mascotas, acabas de agregar ${nuevaMascota}`
    }

    countMascotas() {
        return 'La persona tiene ' + this.mascota.length + ' mascotas actualmente';
    }

    addBook(nombre, autor) {
        return 'El usuario ahora tiene ' + this.libro.push({ nombre, autor }) + ` libros, acabas de agregar un libro llamado ${nombre} del autor ${autor}`
    }

    getBookNames() {

        return this.libro.map(function (libroEnpropiedad) {

            return `${libroEnpropiedad.nombre}`;
        });

    }

}

const usuario = new Usuario('rodrigo', ' gomez', { nombre: 'The Lord of the Rings' }, 'Ovejero Aleman');

// Usuario
console.log(usuario)

// Nombre completo
console.log('El nombre del usuario es ' + usuario.getFullname());

// Agregar Mascota
console.log(usuario.addMascota('Doberman'));

// Cantidad de Mascotas
console.log(usuario.countMascotas())

// Agregar un libro con nombre y autor
console.log(usuario.addBook('Juego De Tronos', 'George R. R. Martin'))
console.log(usuario.addBook('The Lord of the Rings', 'JRR Tolkien'))

// Consultar solo el nombre de cada libro del usuario
console.log(usuario.getBookNames()); */