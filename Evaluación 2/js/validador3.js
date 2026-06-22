
function iniciar() {
    var caja = document.getElementById("caja");
    
    if (caja) {
        caja.addEventListener("click", function() {
            var color = this.style.backgroundColor || "#a8d8ea";
            var ancho = this.style.width || "250px";
            alert(" Información de la caja:\n\n Color: " + color + "\n Ancho: " + ancho);
        });
    }
}

window.onload = iniciar;

function cambiarColor(color) {
    var caja = document.getElementById("caja");
    if (caja) {
        caja.style.backgroundColor = color;
    }
}

function cambiarTamanio(tamanio) {
    var caja = document.getElementById("caja");
    if (!caja) return;
    
    if (tamanio === 'pequeno') {
        caja.style.width = "150px";
        caja.style.height = "100px";
        caja.style.fontSize = "14px";
    } else if (tamanio === 'mediano') {
        caja.style.width = "250px";
        caja.style.height = "160px";
        caja.style.fontSize = "18px";
    } else if (tamanio === 'grande') {
        caja.style.width = "350px";
        caja.style.height = "220px";
        caja.style.fontSize = "22px";
    }
}

function cambiarBorde() {
    var caja = document.getElementById("caja");
    if (!caja) return;
    
    var bordes = ['solid', 'dashed', 'dotted', 'double', 'ridge', 'groove'];
    var indice = Math.floor(Math.random() * bordes.length);
    caja.style.border = "4px " + bordes[indice] + " #333";
}

function mostrarGato() {
    var imgDiv = document.getElementById("imagenGato");
    if (imgDiv) {
        imgDiv.style.display = "block";
        alert(" ¡Aquí está el gato!");
    }
}

function ocultarGato() {
    var imgDiv = document.getElementById("imagenGato");
    if (imgDiv) {
        imgDiv.style.display = "none";
    }
}

function resetearTodo() {
    var caja = document.getElementById("caja");
    
    if (!caja) {
        alert("Error: No se encontró la caja");
        return;
    }
    caja.style.width = "250px";
    caja.style.height = "160px";
    caja.style.backgroundColor = "#a8d8ea";
    caja.style.border = "3px solid #333";
    caja.style.borderRadius = "10px";
    caja.style.fontSize = "18px";
    caja.style.fontFamily = "Calibri, sans-serif";
    caja.style.color = "#2c3e50";
    caja.style.boxShadow = "none";
    caja.style.transform = "scale(1)";
    caja.style.padding = "20px";
    caja.style.margin = "15px auto";
    caja.style.textAlign = "center";
    caja.style.display = "flex";
    caja.style.flexDirection = "column";
    caja.style.justifyContent = "center";
    caja.style.cursor = "pointer";
    caja.style.transition = "all 0.3s ease";
    
    var imgDiv = document.getElementById("imagenGato");
    if (imgDiv) {
        imgDiv.style.display = "none";
    }
    
    alert("Estilos restaurados a su estado original");
}
