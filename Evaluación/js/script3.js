var listaUsers = new Array()
var ventana

function Usuario(id, name, genre){
    this.id = id
    this.name = name
    this.genre = genre

    this.getId = function(){
        return this.id
    }
    this.getName = function(){
        return this.name
    }
    this.getGenre = function(){
        return this.genre
    }
    this.setId = function(newId){
        this.id = newId
    }
    this.verTodo = function(){
        window.alert(this.id+" - "+this.name+" - "+this.genre)
    }
}

function cargarLista(){
    listaUsers[0] = new Usuario(23,'Pedrito','Masculino')
    listaUsers.push(new Usuario(45,'Pascuala','Femenino'))
    listaUsers.unshift(new Usuario(17,'Santiago','Masculino'))
}

function agregarUser(){
    var ide = parseInt(document.getElementById("cajaId").value)
    var nam = document.getElementById("cajaName").value
    var gen = document.getElementsByName("r1")
    var seleccion
    for (let i = 0; i < gen.length; i++) {
        if(gen[i].checked){
            seleccion = gen[i].value
        }        
    }
    listaUsers.push(new Usuario(ide, nam, seleccion))
    window.alert('Agregado Ok!')

}

function verUserVentana(){
    ventana = window.open("","","height=400,width=500")
    contenido = "<html><head><title>Lista Users</title></head><body bgcolor='salmon'>"
    contenido += "<table border='1'><tr><th>ID</th><th>Nombre</th><th>Género</th></tr>"
    ventana.document.write(contenido)
    for (let i = 0; i < listaUsers.length; i++) {
        ventana.document.write("<tr><td>"+listaUsers[i].getId()+"</td>")
        ventana.document.write("<td>"+listaUsers[i].getName()+"</td>")
        ventana.document.write("<td>"+listaUsers[i].getGenre()+"</td></tr>")  
    }
    ventana.document.write("</table></body></html>")
}
function eliminarUser(){
    var idBuscado = prompt('Ingresa el ID del usuario que deseas eliminar:')
    if (idBuscado == null) {
        return
    }
    if (idBuscado.trim() == '') {
        return
    }
    var idBuscadoNum = parseInt(idBuscado)
    if (isNaN(idBuscadoNum)) {
        window.alert('El ID debe ser un número válido.')
        return
    }
    var indiceEncontrado = -1
    for (let i = 0; i < listaUsers.length; i++) {
        if (listaUsers[i].getId() == idBuscadoNum) {
            indiceEncontrado = i
        }
    }
    if (indiceEncontrado == -1) {
        window.alert('No se encontró ningún usuario con el ID ' + idBuscadoNum)
        return
    }
    var nombreUsuario = listaUsers[indiceEncontrado].getName()
    var confirmar = confirm('¿Estás seguro de eliminar a "' + nombreUsuario + '" (ID: ' + idBuscadoNum + ')?')
    if (confirmar == true) {
        listaUsers.splice(indiceEncontrado, 1)
        window.alert('Usuario eliminado correctamente.')
    } else {
        window.alert('Eliminación cancelada.')
    }
}

function actualizarUser(){
    var idBuscado = prompt('Ingresa el ID del usuario que deseas actualizar:')
    if (idBuscado == null) {
        return
    }
    if (idBuscado.trim() == '') {
        return
    }
    var idBuscadoNum = parseInt(idBuscado)
    if (isNaN(idBuscadoNum)) {
        window.alert('El ID debe ser un número válido.')
        return
    }
    var indiceEncontrado = -1
    for (var i = 0; i < listaUsers.length; i++) {
        if (listaUsers[i].id == idBuscadoNum) {
            indiceEncontrado = i
        }
    }
    if (indiceEncontrado == -1) {
        window.alert('No se encontró ningún usuario con el ID ' + idBuscadoNum)
        return
    }
    var opcion = prompt('Usuario encontrado: ID: ' + listaUsers[indiceEncontrado].id + ' Nombre: ' + listaUsers[indiceEncontrado].name + ' Genero: ' + listaUsers[indiceEncontrado].genre + ' Que deseas actualizar? 1 - Nombre 2 - Genero')
    if (opcion == null) {
        return
    }
    if (opcion.trim() == '1') {
        var nuevoNombre = prompt('Ingresa el nuevo nombre:')
        if (nuevoNombre == null) {
            window.alert('Operacion cancelada.')
            return
        }
        if (nuevoNombre.trim() == '') {
            window.alert('Nombre invalido.')
            return
        }
        listaUsers[indiceEncontrado].name = nuevoNombre.trim()
        window.alert('Nombre actualizado correctamente.')
    } else {
        if (opcion.trim() == '2') {
            var nuevoGenero = prompt('Ingresa el nuevo genero (Masculino/Femenino):')
            if (nuevoGenero == null) {
                window.alert('Operacion cancelada.')
                return
            }
            if (nuevoGenero.trim() == '') {
                window.alert('Genero invalido.')
                return
            }
            listaUsers[indiceEncontrado].genre = nuevoGenero.trim()
            window.alert('Genero actualizado correctamente.')
        } else {
            window.alert('Opcion no valida. Operacion cancelada.')
        }
    }
}