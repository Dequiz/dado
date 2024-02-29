function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function rolarDado(){
    const resultado = random(1, 6);
    document.getElementById("resultado").innerHTML = resultado.toString();

    if (resultado === 1) {
        document.getElementById("dado").innerHTML = "<img src='dado1.png'>";
    } else if (resultado === 2) {
        document.getElementById("dado").innerHTML = "<img src='dado2.png'>";
    } else if (resultado === 3) {
        document.getElementById("dado").innerHTML = "<img src='dado3.png'>";
    } else if (resultado === 4) {
        document.getElementById("dado").innerHTML = "<img src='dado4.png'>";
    } else if (resultado === 5) {
        document.getElementById("dado").innerHTML = "<img src='dado5.png'>";
    } else if (resultado === 6) {
        document.getElementById("dado").innerHTML = "<img src='dado6.png'>";
    }
}
function pararRotacao() {
    // Seleciona o elemento com a classe 'rotating-image'
    var dadoElement = document.querySelector('img');
    
    // Remove a classe 'rotating-image' para interromper a animação
    dadoElement.classList.remove('img');
    
}


    






