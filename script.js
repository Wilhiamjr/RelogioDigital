
function Hora() {
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    const inputs = document.querySelectorAll("span");
    console.log(inputs);
    inputs[0].innerHTML = hora;
    inputs[1].innerHTML = minuto;
    inputs[2].innerHTML = segundo;
}
setInterval(Hora, 1000);
var i = 0;
function Rotate() {
    const rotate = document.getElementById("js");
    rotate.style.rotate = i + "deg";
    i++;
}
setInterval(Rotate, 20);
