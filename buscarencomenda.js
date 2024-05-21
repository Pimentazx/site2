var botaoBuscar = document.querySelector('#tabela-encomendas');

botaoBuscar.addEventListener("clock", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);

        encomendas.forEach(function (cada_encomenda) {
            addEncomenda(cada_encomenda);
        });

    });
    xhr.send();
})