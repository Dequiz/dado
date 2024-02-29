function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function rolarDado(){
    const resultado = random(1, 20);
    document.getElementById("resultado").innerHTML = resultado.toString();

    if (resultado === 1) {
        document.getElementById("imagem").innerHTML = "<img src='20-1.png' class='dados'>";
    } else if (resultado === 2) {
        document.getElementById("imagem").innerHTML = "<img src='20-2.png' class='dados'>";
    } else if (resultado === 3) {
        document.getElementById("imagem").innerHTML = "<img src='20-3.png' class='dados'>";
    } else if (resultado === 4) {
        document.getElementById("imagem").innerHTML = "<img src='20-4.png' class='dados'>";
    } else if (resultado === 5) {
        document.getElementById("imagem").innerHTML = "<img src='20-5.png' class='dados'>";
    } else if (resultado === 6) {
        document.getElementById("imagem").innerHTML = "<img src='20-6.png' class='dados'>";
    }
    else if (resultado === 7) {
        document.getElementById("imagem").innerHTML = "<img src='20-7.png' class='dados'>";
    }else if (resultado === 8) {
        document.getElementById("imagem").innerHTML = "<img src='20-8.png' class='dados'>";
    }else if (resultado === 9) {
        document.getElementById("imagem").innerHTML = "<img src='20-9.png' class='dados'>";
    }else if (resultado === 10) {
        document.getElementById("imagem").innerHTML = "<img src='20-10.png' class='dados'>";
    }else if (resultado === 11) {
        document.getElementById("imagem").innerHTML = "<img src='20-11.png' class='dados'>";
    }else if (resultado === 12) {
        document.getElementById("imagem").innerHTML = "<img src='20-12.png' class='dados'>";
    }else if (resultado === 13) {
        document.getElementById("imagem").innerHTML = "<img src='20-13.png' class='dados'>";
    }else if (resultado === 14) {
        document.getElementById("imagem").innerHTML = "<img src='20-14.png' class='dados'>";
    }else if (resultado === 15) {
        document.getElementById("imagem").innerHTML = "<img src='20-15.png' class='dados'>";
    }else if (resultado === 16) {
        document.getElementById("imagem").innerHTML = "<img src='20-16.png' class='dados'>";
    }else if (resultado === 17) {
        document.getElementById("imagem").innerHTML = "<img src='20-17.png' class='dados'>";
    }else if (resultado === 18) {
        document.getElementById("imagem").innerHTML = "<img src='20-18.png' class='dados'>";
    }else if (resultado === 19) {
        document.getElementById("imagem").innerHTML = "<img src='20-19.png' class='dados'>";
    }else if (resultado === 20) {
        document.getElementById("imagem").innerHTML = "<img src='20-20.png' class='dados'>";
    }
}





