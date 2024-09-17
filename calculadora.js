function obterValores() {
    const numero1 = parseFloat(document.querySelector('#numero1').value);
    const numero2 = parseFloat(document.querySelector('#numero2').value);
    return { numero1, numero2 };
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#mais').addEventListener('click', () => {
        if (!msgErro()) somar();
    });
    document.querySelector('#menos').addEventListener('click', () => {
        if (!msgErro()) subtrair();
    });
    document.querySelector('#vezes').addEventListener('click', () => {
        if (!msgErro()) vezes();
    });
    document.querySelector('#dividir').addEventListener('click', () => {
        if (!msgErro()) dividir();
    });
    document.querySelector('#limpar').addEventListener('click', () => {
        confirmarLimpeza();
    });
});

function limparCampos() {
    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
}

function msgErro() {
    const msgsErro = document.getElementsByClassName('erro');
    const { numero1, numero2 } = obterValores();
    let erro = false;

    if (isNaN(numero1) || numero1 === 0) {
        erro = true;
        msgsErro[0].innerHTML = "Insira o primeiro número!";
    } else {
        msgsErro[0].innerHTML = "";
    }

    if (isNaN(numero2) || numero2 === 0) {
        erro = true;
        msgsErro[1].innerHTML = "Insira o segundo número!";
    } else {
        msgsErro[1].innerHTML = "";
    }

    return erro;
}

function somar() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 + numero2;
    atualizarResultado(resultado);
}

function subtrair() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 - numero2;
    atualizarResultado(resultado);
}

function vezes() {
    const { numero1, numero2 } = obterValores();
    const resultado = numero1 * numero2;
    atualizarResultado(resultado);
}

function dividir() {
    const { numero1, numero2 } = obterValores();
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        atualizarResultado(resultado);
    } else {
        atualizarResultado('Divisão por zero!');
    }
}

function atualizarResultado(valor) {
    document.querySelector('#resultado').value = valor;
}


function confirmarLimpeza() {
    Swal.fire({
        title: "Tem certeza?",
        text: "Isso vai limpar os campos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, limpar!",
        cancelButtonText: "Cancelar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Limpo!",
                text: "Ação realizada com sucesso.",
                icon: "success"
            });

            limparCampos();
            atualizarResultado(null);

            setTimeout(function () {
                focarNum1('numero1');
            }, 300);
        }
    });
}


function focarNum1(idComponente) {
    document.getElementById(idComponente).focus();
}

window.addEventListener('load', function () {
    focarNum1('numero1');
})

//Função para alternar entre os temas claro e escuro
let temaEscuro = false;

function alternarTema() {
    let body = document.body;
    if (temaEscuro) {
        body.classList.remove('tema-escuro');
    } else {
        body.classList.add('tema-escuro');
    }
    temaEscuro = !temaEscuro;
}