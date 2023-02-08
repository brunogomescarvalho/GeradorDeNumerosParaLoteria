const btnGerarNrs = document.getElementById("btnGerarNrs");
const campo = document.getElementsByClassName("campo");
const btnLimpar = document.getElementById("btnLimpar");

var sequencia = [];
var nrUnico;
var nrSorteado;


const gerarNumeroDaSorte = () => {

    gerarSequenciaAleatoria(1, 60);
}

btnGerarNrs.addEventListener('click', gerarNumeroDaSorte)


const gerarSequenciaAleatoria = (min, max) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    sequencia = [];

    for (let index = 0; index < 6; index++) {

        nrUnico = true;

        if (sequencia.length > 0) {

            while (nrUnico) {

                nrSorteado = Math.floor(Math.random() * (max - min + 1) + min);
                nrUnico = sequencia.find(n => n == nrSorteado);
            }
        }
        else {
            nrSorteado = Math.floor(Math.random() * (max - min + 1) + min);

        }

        sequencia.push(nrSorteado);
    }
    sequencia.sort((a, b) => a - b);

    console.log(sequencia);

    atualizarJogo();
    preecherBilhete(sequencia)

}

const preecherBilhete = (sequencia) => {

    for (let i = 0; i < campo.length; i++) {
        campo[i].style = "background-color:rgba(245, 229, 158, 0.714)"
    }

    sequencia.forEach(element => {
        var nr = document.getElementById(element);
        nr.parentElement.style = "background-color:rgba(0, 0, 0, .5)"

    });
}

const limparJogo = () => {

    for (let i = 0; i < campo.length; i++) {
        campo[i].style = "background-color:rgba(245, 229, 158, 0.714)"
    }
    sequencia = [];

    atualizarJogo()

}

btnLimpar.addEventListener("click", limparJogo)

function atualizarJogo() {
    var n1 = document.getElementById('nr1');
    var n2 = document.getElementById('nr2');
    var n3 = document.getElementById('nr3');
    var n4 = document.getElementById('nr4');
    var n5 = document.getElementById('nr5');
    var n6 = document.getElementById('nr6');

    n1.textContent = sequencia[0];
    n2.textContent = sequencia[1];
    n3.textContent = sequencia[2];
    n4.textContent = sequencia[3];
    n5.textContent = sequencia[4];
    n6.textContent = sequencia[5];
}

