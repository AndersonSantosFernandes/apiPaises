function buscarPais(nomepais) {
    var seletor = document.getElementById('seletor')

    fetch("https://servicodados.ibge.gov.br/api/v1/paises/0/")
        .then(response1 => response1.json())
        .then(response1 => exibir1(response1))
    function exibir1(dados1) {
        // console.clear()
        // console.log('sdsgdsfg',dados1[seletor.value])
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

