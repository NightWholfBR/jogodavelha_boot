// Disparando o monitor de eventos
document.addEventListener('DOMContentLoaded', function() {

})

// Declaração de Variáveis para os Elementos do Jogo
let letra = 'X'; // X ou O

function joga(casa) {
    let celulaClicada = document.getElementById(casa).innerHTML;

    if(celulaClicada == 'X'|| celulaClicada == 'O') {
        alert('Este espaço já foi preenchido!');
    } else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'X') {
            letra = 'O';
        } else {
            letra = 'X';
        }
    }
}

    function testa() {
        const c1 = document.getElementById('c1').innerHTML;
        const c2 = document.getElementById('c2').innerHTML;
        const c3 = document.getElementById('c3').innerHTML;
        const c4 = document.getElementById('c4').innerHTML;
        const c5 = document.getElementById('c5').innerHTML;
        const c6 = document.getElementById('c6').innerHTML;
        const c7 = document.getElementById('c7').innerHTML;
        const c8 = document.getElementById('c8').innerHTML;
        const c9 = document.getElementById('c9').innerHTML;

        if(c1 != '' && c4 != '' && c7 != ''&&
             c1 == c4 && c4 == c7 ||

             c2 != '' && c5 != '' && c8 != '' &&
             c2 == c5 && c5 ==c8 ||
             
             c3 != '' && c6 != '' && c9 !== '' &&
             c3 == c6 && c6 ==9 ||
             
             c1 != '' && c2 != '' && c3 != '' &&
             c1 == c2 && c2 == c3 ||
             
             c4 != '' && c5 !== '' && c6 != '' &&
             c4 == c5 && c5 == c6 ||
             
             c7 != '' && c8 != '' && c9 != '' &&
             c7 == c8 && c8 == c9 ||
             
             c1 != '' && c5 != '' && c9 != '' &&
             c1 == c5 && c5 == c9 ||
             
             c3 != '' && c5 != '' && c7 != '' &&
             c3 == c5 && c5 == c7) {
                alert('Você venceu!!!');
                limpa();
             }
    }

    function limpar () {
        for(let i = 1; 1 <=9; i++){
            let celula = 'c'
            document.getElementById('c'+i).innerHTML = '';
        }
    }