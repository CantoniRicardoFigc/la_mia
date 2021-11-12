let i = 0;

function buttonCiaone() {

    i++;
    document.getElementById("h").innerHTML = "Prontone"
    document.getElementById("b").innerHTML = "Disegna"
    
    if (i==2) {
        document.getElementById("b").innerHTML = "Ricomincia"
    }
    if (i==3) {
        document.getElementById("b").innerHTML = "Cambia testo"
        document.getElementById("h").innerHTML = "Ciaone"
        i=0;
    }
    
}
function buttonQuadrati() {

    var canvas = document.getElementById("myCanvas1");
    var ctx = canvas.getContext("2d");

    //rosso
    for (let index = 0; index <= 250; index = index +10) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(index, 0, 20, 20)
    }
    for (let index = 0; index <= 250; index = index +10) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, index, 20, 20)
    }
    for (let index = 0; index <= 250; index = index +10) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(250, index, 20, 20)
    }
    for (let index = 0; index <= 250; index = index +10) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(index, 250, 20, 20)
    }

    //arancione
    for (let index = 20; index <= 230; index = index +10) {
        ctx.fillStyle = "orange";
        ctx.fillRect(index,20, 20, 20)
    }
    for (let index = 20; index <= 230; index = index +10) {
        ctx.fillStyle = "orange";
        ctx.fillRect(20, index, 20, 20)
    }
    for (let index = 20; index <= 230; index = index +10) {
        ctx.fillStyle = "orange";
        ctx.fillRect(230, index, 20, 20)
    }
    for (let index = 20; index <= 230; index = index +10) {
        ctx.fillStyle = "orange";
        ctx.fillRect(index, 230, 20, 20)
    }

    //giallo
    for (let index = 40; index <= 210; index = index +10) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(index,40, 20, 20)
    }
    for (let index = 40; index <= 210; index = index +10) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(40, index, 20, 20)
    }
    for (let index = 40; index <= 210; index = index +10) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(210, index, 20, 20)
    }
    for (let index = 40; index <= 210; index = index +10) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(index, 210, 20, 20)
    }

    //verde
    for (let index = 60; index <= 170; index = index +10) {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(index,60, 40, 40)
    }
    for (let index = 60; index <= 170; index = index +10) {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(60, index, 40, 40)
    }
    for (let index = 60; index <= 170; index = index +10) {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(170, index, 40, 40)
    }
    for (let index = 60; index <= 170; index = index +10) {
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(index, 170, 40, 40)
    }
    
}