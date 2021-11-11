let scambio=false;
function buttonCiaone() {
    document.getElementById("h").innerHTML = "Prontone"
    document.getElementById("b").innerHTML = "Disegna"
    
    if (scambio==false) {
        scambio==true
    }
    
    if (document.getElementById("b").innerHTML == "Disegna" && scambio==false) {
        var canvas = document.getElementById("myCanvas1");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, 0, 200, 200);
    }
}