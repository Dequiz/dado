function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function rolarDado(){
    const resultado = random(1, 12);
    document.getElementById("resultado").innerHTML = resultado.toString();

    if (resultado === 1) {
        document.getElementById("imagem").innerHTML = "<img src='12-1.png' class='dados'>";
    } else if (resultado === 2) {
        document.getElementById("imagem").innerHTML = "<img src='12-2.png' class='dados' >";
    } else if (resultado === 3) {
        document.getElementById("imagem").innerHTML = "<img src='12-3.png' class='dados'>";
    } else if (resultado === 4) {
        document.getElementById("imagem").innerHTML = "<img src='12-4.png' class='dados'>";
    } else if (resultado === 5) {
        document.getElementById("imagem").innerHTML = "<img src='12-5.png' class='dados'>";
    } else if (resultado === 6) {
        document.getElementById("imagem").innerHTML = "<img src='12-6.png' class='dados'>";
    }
    else if (resultado === 7) {
        document.getElementById("imagem").innerHTML = "<img src='12-7.png' class='dados'>";
    }else if (resultado === 8) {
        document.getElementById("imagem").innerHTML = "<img src='12-8.png' class='dados'>";
    }else if (resultado === 9) {
        document.getElementById("imagem").innerHTML = "<img src='12-9.png' class='dados'>";
    }else if (resultado === 10) {
        document.getElementById("imagem").innerHTML = "<img src='12-10.png' class='dados'>";
    }else if (resultado === 11) {
        document.getElementById("imagem").innerHTML = "<img src='12-11.png' class='dados'>";
    }else if (resultado === 12) {
        document.getElementById("imagem").innerHTML = "<img src='12-12.png' class='dados'>";
    }
}






