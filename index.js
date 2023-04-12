function calcular() {
    var altura = Number(document.getElementById("n2").value / 100);
    var peso = Number(document.getElementById("n1").value);
    var imc = peso / (altura * altura);
    var text = "";

    if (imc < 18.5) {
        text = "você está magro";
    } else if (imc < 24.9) {
        text = "você está normal";
    } else if (imc < 29.9) {
        text = "você está com sobrepeso";
    } else if (imc < 39.9) {
        text = "você está com obesidade";
    } else if (imc < 40.0) {
        text = "você está com obesidade grave";
    }

    document.getElementById("text").innerText = text;
}
