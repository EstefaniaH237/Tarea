function validar() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var estudios = document.getElementById("estudios").value;
    var chkEmail = document.getElementById("chkEmail").checked;
    var chkTelefono = document.getElementById("chkTelefono").checked;
    var chkWhatsapp = document.getElementById("chkWhatsapp").checked;
    

    if (nombre === "") {
        mostrarMensaje("❌ Error: El nombre está vacío", "error");
        alert("❌ Error: El nombre está vacío");
        return;
    }
    
    if (correo === "") {
        mostrarMensaje(" Error: El correo está vacío", "error");
        alert(" Error: El correo está vacío");
        return;
    }
    
    if (!correo.includes("@") || !correo.includes(".")) {
        mostrarMensaje(" Error: El correo debe tener @ y .", "error");
        alert(" Error: El correo debe tener @ y .");
        return;
    }
    
    
    if (estudios === "") {
        mostrarMensaje(" Error: Selecciona un nivel de estudios", "error");
        alert(" Error: Selecciona un nivel de estudios");
        return;
    }
    
    
    if (!chkEmail && !chkTelefono && !chkWhatsapp) {
        mostrarMensaje(" Error: Selecciona al menos un medio de contacto", "error");
        alert(" Error: Selecciona al menos un medio de contacto");
        return;
    }
    
    mostrarMensaje(" ¡Formulario validado correctamente!", "exito");
    alert(" Todos los datos son correctos");
}

function mostrarMensaje(texto, tipo) {
    var div = document.getElementById("mensaje");
    div.innerHTML = texto;
    div.className = tipo;
    div.style.display = "block";
}


function limpiarTodo() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    
    var select = document.getElementById("estudios");
    select.selectedIndex = 0;  
    
    document.getElementById("chkEmail").checked = false;
    document.getElementById("chkTelefono").checked = false;
    document.getElementById("chkWhatsapp").checked = false;
    
    var div = document.getElementById("mensaje");
    div.innerHTML = "";
    div.className = "";
    div.style.display = "none";
    
    document.getElementById("nombre").focus();
    
    console.log("✅ Formulario limpiado correctamente");
}