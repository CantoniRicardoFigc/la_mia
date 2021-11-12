let i = 0;
function buttonCiaone() {
    i++;
    document.getElementById("h").innerHTML = "Prontone"
    document.getElementById("b").innerHTML = "Disegna"
    
    if (i==2) {
        var canvas = document.getElementById("myCanvas1");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, 0, 500, 500);
    }
    
}