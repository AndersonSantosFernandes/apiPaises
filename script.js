function buscarPais(nomepais) {
    var seletor = document.getElementById('seletor')

    fetch("https://servicodados.ibge.gov.br/api/v1/paises/0/")
        .then(response1 => response1.json())
        .then(response1 => exibir1(response1))
    function exibir1(dados1) {
        // console.clear()
        // console.log('sdsgdsfg',dados1[seletor.value])
        const sessao = document.getElementById("main__section")
        var mostraInfo = document.getElementById("mostra__informacoes")
        mostraInfo.innerHTML =
            `
                <h1 class="pais" >País: ${dados1[seletor.value]['nome']['abreviado']}</h1>
                <h3>Capital: ${dados1[seletor.value]['governo']['capital']['nome']} </h3>
                <h3>Idioma: ${dados1[seletor.value]['linguas'][0]['nome']} </h3>
                <h3>Área: ${dados1[seletor.value]['area']['total']} ${dados1[seletor.value]['area']['unidade']['nome']} </h3>
                <h3>Localização: ${dados1[seletor.value]['localizacao']['regiao']['nome']} </h3>                
                <h3>Sub região: ${dados1[seletor.value]['localizacao']['sub-regiao']['nome']} </h3>
                <h3>Moeda: ${dados1[seletor.value]['unidades-monetarias'][0]['nome']} </h3>
                <hr>
                <h2>Histórico</h2>
                <h3> ${dados1[seletor.value]['historico']}  </h3>
            `

            switch (dados1[seletor.value]['localizacao']['regiao']['nome']) {
                case "Ásia":
                    sessao.style.backgroundColor="aquamarine"
                    break;
                    case "África":
                        sessao.style.backgroundColor="coral"
                        break;
                        case "Europa":
                        sessao.style.backgroundColor="rgb(204, 128, 128)"
                        break;
                        case "América":
                        sessao.style.backgroundColor="burlywood"
                        break;
                        case "Oceania":
                        sessao.style.backgroundColor="lawngreen"
                        break;
            
                default:
                    break;
            }

    } 
}

//Dados para o select de países
fetch("https://servicodados.ibge.gov.br/api/v1/paises/0/")
    .then(response => response.json())
    .then(response => exibir(response))
function exibir(dados) {
    var seletor = document.getElementById('seletor')//onde aparece a informação
    console.log(dados)
    for (i = 0; i < dados.length; i++) {
               
        seletor.innerHTML +=
            `        
        <option value="${i}">${i + " " + dados[i]['nome']['abreviado']}</option>
        `
    }
}

//Jquery par busca rápida no select
$(document).ready(function () {
    $('#seletor').select2();

});

