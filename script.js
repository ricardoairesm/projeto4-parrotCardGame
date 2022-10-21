

/*codigo logico di problema */


let cartas = parseInt(prompt("Qual será o numero de cartas?"))
if(cartas%2 == 0 && cartas>2){
    distribuirCartas();
}
else{
    alert('Não pode inserir numeros impar');
}

console.log(cartas);





/*Funcoes utilizadas*/


function distribuirCartas() {
    for (let i = 1; i <= (cartas/2); i++) {
        let c = document.getElementById('principal');
        c.innerHTML += `<div class="card">
<div class="front-face face" onclick="virarCarta(this)">
    <img src="Imagens/front 1.png">
</div>
<div class="back-face face" onclick="virarCarta2(this)">
<img src="Imagens/fundo${i}.gif">
</div>
</div>` ;
        c.innerHTML += `<div class="card">
<div class="front-face face" onclick="virarCarta(this)">
    <img src="Imagens/front 1.png">
</div>
<div class="back-face face" onclick="virarCarta2(this)">
<img src="Imagens/fundo${i}.gif">
</div>
</div>` ;

    }
}



function virarCarta(elemento) {
    elemento.classList.toggle("virar1");
    let a = elemento.parentNode.childNodes[3];
    a.classList.toggle('virar2');
}

function virarCarta2(elemento) {
    elemento.classList.toggle("virar2");
    let a = elemento.parentNode.childNodes[1];
    a.classList.toggle('virar1');
}



