function genera() {
    var ct = document.getElementById("testo"); // commenta qui
    var console = document.getElementById("console"); // commenta qui
    if(ct.value == "")
        console.innerHTML = "inserire il valore massimo da generare.";
    else {
        var num_max = ct.value; // commenta qui
        var num_generato = Math.floor((Math.random() * num_max) + 1); //commenta qui
        console.innerHTML = " IL numero  casuale estratto è: " + num_generato; //commenta qui
    }  
}
function resetta() {
    document.getElementById("testo").value = " "
    document.getElementById("console").innerHTML = " ";
}
function saluti() {
    alert("Saluti!");
}



