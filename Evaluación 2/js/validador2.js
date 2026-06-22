function verificarFechas() {
    var inicio = document.getElementById("fechaInicio").value;
    var cierre = document.getElementById("fechaCierre").value;
    
    var div = document.getElementById("resultado");
    
    if (inicio === "" || cierre === "") {
        div.innerHTML = " Error: Debes ingresar ambas fechas";
        div.className = "error";
        div.style.display = "block";
        alert(" Por favor, completa ambas fechas");
        return;
    }
    
    var fechaInicio = new Date(inicio);
    var fechaCierre = new Date(cierre);
    
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaCierre.getTime())) {
        div.innerHTML = " Error: Una de las fechas no es válida";
        div.className = "error";
        div.style.display = "block";
        alert(" Una de las fechas no es válida");
        return;
    }
    
    if (fechaInicio > fechaCierre) {
        div.innerHTML = " Error: La fecha de inicio no puede ser mayor a la de cierre";
        div.className = "error";
        div.style.display = "block";
        alert(" La fecha de inicio (" + fechaInicio.toLocaleDateString() + ") es mayor que la de cierre (" + fechaCierre.toLocaleDateString() + ")");
        return;
    }
    
    div.innerHTML = " ¡Fechas correctas!";
    div.className = "exito";
    div.style.display = "block";
    
    var ventana = window.open("", "", "width=450,height=280,scrollbars=yes");
    
    if (ventana) {
        ventana.document.write("<html>");
        ventana.document.write("<head><title> Fechas Verificadas</title>");
        ventana.document.write("<style>");
        ventana.document.write("body { font-family: 'Calibri', Arial, sans-serif; text-align: center; padding: 30px; background-color: #d4edda; }");
        ventana.document.write(".container { background-color: white; padding: 30px; border-radius: 12px; max-width: 400px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }");
        ventana.document.write("h2 { color: #155724; }");
        ventana.document.write("hr { border: 1px solid #c3e6cb; }");
        ventana.document.write("button { background-color: #28a745; color: white; border: none; padding: 10px 35px; border-radius: 6px; font-size: 16px; cursor: pointer; margin-top: 15px; }");
        ventana.document.write("button:hover { background-color: #218838; }");
        ventana.document.write(".fecha { font-size: 18px; font-weight: bold; color: #2c3e50; }");
        ventana.document.write("</style>");
        ventana.document.write("</head>");
        ventana.document.write("<body>");
        ventana.document.write("<div class='container'>");
        ventana.document.write("<h2> ¡Fechas Verificadas!</h2>");
        ventana.document.write("<hr>");
        ventana.document.write("<p><b> Fecha de Inicio:</b></p>");
        ventana.document.write("<p class='fecha'>" + fechaInicio.toLocaleDateString() + "</p>");
        ventana.document.write("<br>");
        ventana.document.write("<p><b> Fecha de Cierre:</b></p>");
        ventana.document.write("<p class='fecha'>" + fechaCierre.toLocaleDateString() + "</p>");
        ventana.document.write("<hr>");
        ventana.document.write("<button onclick='window.close()'>Cerrar</button>");
        ventana.document.write("</div>");
        ventana.document.write("</body>");
        ventana.document.write("</html>");
        ventana.document.close();
    } else {
        alert(" Fechas correctas:\n\nInicio: " + fechaInicio.toLocaleDateString() + "\nCierre: " + fechaCierre.toLocaleDateString());
    }
}

function limpiarFechas() {
    document.getElementById("fechaInicio").value = "";
    document.getElementById("fechaCierre").value = "";
    
    var div = document.getElementById("resultado");
    div.innerHTML = "";
    div.className = "";
    div.style.display = "none";
}
