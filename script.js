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
    for (let index = 140; index >= 0; index = index -20) {
        let z=140;
        ctx.fillRect(index,z-index, 10, 10)
    }
}

function button3Function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ff0000";

    for (let index = 140; index >= 0; index = index -20) {
        for (let j = 0; j <=140; j = j +20) {
        ctx.fillRect(index,j, 10, 10)
        }
    }
}
