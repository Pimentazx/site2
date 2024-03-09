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
function CalculaTotalEncomenda(valor) {
    if (valor < 1 || isNaN(valor)) {
        return false
    } else {
        return true
    }
}




