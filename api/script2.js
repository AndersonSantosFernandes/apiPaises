function buscarPais(nomepais) {
    var seletor = document.getElementById('seletor')

    fetch("https://restcountries.com/v3.1/name/a")
        .then(response1 => response1.json())
        .then(response1 => exibir1(response1))
    function exibir1(dados1) {
        // console.clear()
        // console.log('sdsgdsfg',dados1[seletor.value])
        var mostraInfo = document.getElementById("mostra__informacoes")
        mostraInfo.innerHTML =
            `
                <h1 class="pais" >País: ${dados1[seletor.value]['translations']['por']['common']}</h1>
                <h1>Nome oficial: ${dados1[seletor.value]['translations']['por']['official']}</h1>
              
                <h2>Capital: ${dados1[seletor.value]['capital'][0]}</h2>
                <h2>População: ${dados1[seletor.value]['population']}</h2>
               
              
       
                <h2>Região: ${dados1[seletor.value]['region']}</h2>
                <h2>Subregião: ${dados1[seletor.value]['subregion']}</h2>
                <h2>Posição mapa: <a href="${dados1[seletor.value]['maps']['googleMaps']}" target="blank">Posição Google Maps</a></h2>
                <br>
                <h2>Bandeiras</h2>
                <div class="bandeiras">
                <div class="bandeira">
                    <img class="flag" src="${dados1[seletor.value]['flags']['png']}" alt="${dados1[seletor.value]['flags']['alt']}">
                </div>
                <div class="brasao">
                    <img class="flag" src="${dados1[seletor.value]['coatOfArms']['svg']}" alt="Brasão da república">
                </div>
            </div>
            `
    }
}

// <h2>Linguagem: ${dados1[seletor.value]['languages']['por']}</h2>

//Dados para o select de países
fetch("https://restcountries.com/v3.1/name/a")
    .then(response => response.json())
    .then(response => exibir(response))
function exibir(dados) {
    var seletor = document.getElementById('seletor')//onde aparece a informação
    console.log(dados)
    for (i = 0; i < dados.length; i++) {
               
        seletor.innerHTML +=
            `        
        <option value="${i}">${i} ${dados[i]['translations']['por']['common']}</option>
        `
    }
}

