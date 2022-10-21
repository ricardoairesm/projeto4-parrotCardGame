

/*codigo logico di problema */

let contador = 0;
let arr = [];
let verificarpar = [];
let guardarposicao = [];
let cartas = parseInt(prompt("Qual será o numero de cartas?"))



if (cartas % 2 == 0 && cartas > 2 && cartas <15) {
    distribuirCartas();
}
else {
    alert('Por favor insira um número par entre 4 e 14!');
    cartas = parseInt(prompt("Qual será o numero de cartas?"));
    if (cartas % 2 == 0 && cartas > 2) {
        distribuirCartas();
    }
}







/*Funcoes utilizadas*/


function distribuirCartas() {
    for (let i = 1; i <= (cartas / 2); i++) {
        arr.push(`<div class="card">
        <div class="front-face face" onclick="executar(this)">
            <img src="Imagens/front 1.png">
        </div>
        <div class="back-face face" >
        <img src="Imagens/fundo${i}.gif">
        </div>
        </div>`);
        arr.push(`<div class="card">
        <div class="front-face face" onclick="executar(this)">
            <img src="Imagens/front 1.png">
        </div>
        <div class="back-face face" >
        <img src="Imagens/fundo${i}.gif">
        </div>
        </div>`);
    }

     shuffleArray(arr);

    for (let i = 0; i < cartas; i++) {
        let c = document.getElementById('principal');
        c.innerHTML += arr[i];
    }
}

function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}


function executar(elemento) {
    
    if(contador == 2){
        contador = 0;
    }

    if (contador == 1) {
        comparar(elemento);

        if (verificarpar[0] == verificarpar[1]) {
            virarCarta(elemento);
            verificarpar.pop();
            verificarpar.pop();
            let a = document.querySelectorAll(".virada");
            for (i = 0; i < a.length; i++) {
                a[i].classList.toggle('virada');
            }
        }
        else {
           
            virarCarta(elemento);

            setTimeout(() => {
                virarCartasMarcadas();
            }, 1500);
        }

    }

    if (contador == 0) {
        comparar(elemento);
        virarCarta(elemento);
    }
    if(console.log(document.querySelectorAll(".virar1").length) === cartas){
        alert("Parabens pela vitoria!")
    }
    
}

function virarCartasMarcadas() {
    let viradas = document.querySelectorAll(".virada");
    for (i = 0; i < viradas.length; i++) {
        virarCarta2(viradas[i].childNodes[1]);
        contador = 0;
        console.log(contador);
    }


}
function comparar(elemento){
    let a = elemento.parentNode.childNodes[3];
    verificarpar.push(a.innerHTML);
}


function virarCarta(elemento) {
    let a = elemento.parentNode.childNodes[3];
    elemento.classList.toggle("virar1");
    elemento.parentNode.classList.toggle("virada");
    a.classList.toggle('virar2');
    contador++;
    console.log(verificarpar);
    console.log(contador);
}

function virarCarta2(elemento) {
    let a = elemento.parentNode.childNodes[3];
    elemento.classList.toggle("virar1");
    elemento.parentNode.classList.toggle("virada");
    a.classList.toggle('virar2');
    verificarpar.pop();
    console.log(verificarpar);
    console.log(contador);
}




