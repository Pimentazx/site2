//Captura todos os clientes que fizeram encomenda
var clientes = document.querySelectorAll(".clientes");

for (var i = 0; i < clientes.length; i++) {
    //Captura a quantidade encomendada
    var qtde = clientes[i].querySelector(".qtde").textContent;

    //Captura o valor unitário do produto
    var unitario = clientes[i].querySelector(".unitario").textContent;

    //Verifica se a quantidade é um número e válido
    if (!validaQtde(qtde)) {
        clientes[i].querySelector(".qtde").textContent = "QTDE INVALIDA!";
        clientes[i].classList.add("info-qtde");
    } else if (!validaUnit(unitario)) {
        clientes[i].querySelector(".unitario").textContent = "VALOR INVALIDO!";
        clientes[i].classList.add("info-unit");
    } else {
        //Quantidade OK, prossegue
        //Calcula o valor total da encomenda
        clientes[i].querySelector(".unitario").textContent = formataValor(unitario);
        clientes[i].querySelector(".total").textContent = calcularTotal(qtde, unitario);

    }
}

//Função para calcular o valor total
function calcularTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;
    return formataValor(total);
}

function formataValor(valor) {
    return parseFloat(valor).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
}


//função de validação de quantidade recebida
function validaQtde(valor) {
    if (valor < 1 || isNaN(valor)) {
        return false
    } else {
        return true
    }
}

//função de validação do valor unitario
function validaUnit(valor) {
    if (valor < 1 || isNaN(valor)) {
        return false
    } else {
        return true
    }
}

// Função para calcular o valor total da encomenda


function adicionarEncomenda() {
    var nome = document.getElementById("nome").value;
    var qtde = document.getElementById("qtde").value;
    var produto = document.getElementById("produto").value;
    var unit = document.getElementById("unit").value;

    var table = document.getElementById("tabela-encomendas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cellNome = newRow.insertCell(0);
    var cellProduto = newRow.insertCell(1);
    var cellQtde = newRow.insertCell(2);
    var cellUnit = newRow.insertCell(3);
    var cellTotal = newRow.insertCell(4);

    cellNome.innerHTML = nome;
    cellProduto.innerHTML = produto;
    cellQtde.innerHTML = qtde;
    cellUnit.innerHTML = formataValor(unit);
    cellTotal.innerHTML = formataValor(qtde * unit);

    if (validaEncomenda(encomenda).length > 0) {
        console.log(validaEncomenda(encomenda));

    } else {
        addEncomenda(encomenda);

        form.reset();
    }
}
//Função de validação
function adicionarEncomenda() {
    var nome = document.getElementById("nome").value;
    var qtde = document.getElementById("qtde").value;
    var produto = document.getElementById("produto").value;
    var unit = document.getElementById("unit").value;

    // Variável para armazenar todas as mensagens de erro
    var mensagemErro = "";

    // Verifica se algum campo está em branco ou não selecionado
    if (nome.trim() === "") {
        mensagemErro += "Por favor, preencha o campo Nome.<br>";
        document.getElementById("erro-nome").innerHTML = "";
    } else {
        document.getElementById("erro-nome").innerHTML = "";
    }

    if (qtde.trim() === "") {
        mensagemErro += "Por favor, preencha o campo Quantidade.<br>";
        document.getElementById("erro-qtde").innerHTML = "";
    } else {
        document.getElementById("erro-qtde").innerHTML = "";
    }

    if (produto === "Selecione") {
        mensagemErro += "Por favor, selecione um Produto.<br>";
        document.getElementById("erro-produto").innerHTML = "";
    } else {
        document.getElementById("erro-produto").innerHTML = "";
    }

    if (unit.trim() === "") {
        mensagemErro += "Por favor, preencha o campo Valor Unitário.<br>";
        document.getElementById("erro-unit").innerHTML = "";
    } else {
        document.getElementById("erro-unit").innerHTML = "";
    }

    // Verifica se a quantidade é um número válido
    if (!validaQtde(qtde)) {
        mensagemErro += "Quantidade inválida.<br>";
        document.getElementById("erro-qtde").innerHTML = "";
    } else {
        document.getElementById("erro-qtde").innerHTML = "";
    }

    // Verifica se o valor unitário é um número válido
    if (!validaUnit(unit)) {
        mensagemErro += "Valor unitário inválido.<br>";
        document.getElementById("erro-unit").innerHTML = "";
    } else {
        document.getElementById("erro-unit").innerHTML = "";
    }

    // Se houver erros, exibe-os
    if (mensagemErro !== "") {
        document.getElementById("mensagem-erro").innerHTML = mensagemErro;
        return;
    } else {
        document.getElementById("mensagem-erro").innerHTML = "";
    }

    // Se todas as verificações passarem, adiciona a encomenda à tabela
    var table = document.getElementById("tabela-encomendas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cellNome = newRow.insertCell(0);
    var cellProduto = newRow.insertCell(1);
    var cellQtde = newRow.insertCell(2);
    var cellUnit = newRow.insertCell(3);
    var cellTotal = newRow.insertCell(4);

    cellNome.innerHTML = nome;
    cellProduto.innerHTML = produto;
    cellQtde.innerHTML = qtde;
    cellUnit.innerHTML = formataValor(unit);
    cellTotal.innerHTML = formataValor(qtde * unit);
}





var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 0);
})

//Filtrando as tabelas
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var clientes = document.querySelectorAll(".clientes");

    //Verifica se tem critério de busca
    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {
            var nome = clientes[cli].querySelector(".nome").textContent;

            var expressao = new RegExp(this.value, "i");

            //Verifica os clientes conforme critério de busca
            if (!expressao.test(nome)) {
                clientes[cli].classList.add("invisivel");
            } else {
                clientes[cli].classList.remove("invisivel");
            }
        }
    } else {
        for (var cli = 0; cli < clientes.length; cli++) {
            var nome = clientes[cli].querySelector(".nome").textContent;

            clientes[cli].classList.remove("invisivel");
        }
    }
});