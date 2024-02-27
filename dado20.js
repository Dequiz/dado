function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function rolarDado(){
    const resultado = random(1, 20);
    document.getElementById("resultado").innerHTML = resultado.toString();

    if (resultado === 1) {
        document.getElementById("imagem").innerHTML = "<img src='20-1.png'>";
    } else if (resultado === 2) {
        document.getElementById("imagem").innerHTML = "<img src='20-2.png'>";
    } else if (resultado === 3) {
        document.getElementById("imagem").innerHTML = "<img src='20-3.png'>";
    } else if (resultado === 4) {
        document.getElementById("imagem").innerHTML = "<img src='20-4.png'>";
    } else if (resultado === 5) {
        document.getElementById("imagem").innerHTML = "<img src='20-5.png'>";
    } else if (resultado === 6) {
        document.getElementById("imagem").innerHTML = "<img src='20-6.png'>";
    }
    else if (resultado === 7) {
        document.getElementById("imagem").innerHTML = "<img src='20-7.png'>";
    }else if (resultado === 8) {
        document.getElementById("imagem").innerHTML = "<img src='20-8.png'>";
    }else if (resultado === 9) {
        document.getElementById("imagem").innerHTML = "<img src='20-9.png'>";
    }else if (resultado === 10) {
        document.getElementById("imagem").innerHTML = "<img src='20-10.png'>";
    }else if (resultado === 11) {
        document.getElementById("imagem").innerHTML = "<img src='20-11.png'>";
    }else if (resultado === 12) {
        document.getElementById("imagem").innerHTML = "<img src='20-12.png'>";
    }else if (resultado === 13) {
        document.getElementById("imagem").innerHTML = "<img src='20-13.png'>";
    }else if (resultado === 14) {
        document.getElementById("imagem").innerHTML = "<img src='20-14.png'>";
    }else if (resultado === 15) {
        document.getElementById("imagem").innerHTML = "<img src='20-15.png'>";
    }else if (resultado === 16) {
        document.getElementById("imagem").innerHTML = "<img src='20-16.png'>";
    }else if (resultado === 17) {
        document.getElementById("imagem").innerHTML = "<img src='20-17.png'>";
    }else if (resultado === 18) {
        document.getElementById("imagem").innerHTML = "<img src='20-18.png'>";
    }else if (resultado === 19) {
        document.getElementById("imagem").innerHTML = "<img src='20-19.png'>";
    }else if (resultado === 20) {
        document.getElementById("imagem").innerHTML = "<img src='20-20.png'>";
    }
}





