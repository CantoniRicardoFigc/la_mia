function buttonFunction() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ff8000";
    ctx.fillRect(0, 0, 150, 150);

  }

function button2Function() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffbf00";

    for (let index = 0; index <= 140; index = index +20) {
        ctx.fillRect(index,index, 10, 10)
    }
    
    ctx.fillRect(140, 0, 10, 10);
    ctx.fillRect(120, 20, 10, 10);
    ctx.fillRect(100, 40, 10, 10);
    ctx.fillRect(80, 60, 10, 10);
    ctx.fillRect(60, 80, 10, 10);
    ctx.fillRect(40, 100, 10, 10);
    ctx.fillRect(20, 120, 10, 10);
    ctx.fillRect(0, 140, 10, 10);

}