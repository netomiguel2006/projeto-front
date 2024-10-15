const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes '

function listarFilmes(filmes) {
    // posicionar-se no corpo da tabela 
    let tabela = document.querySelector('.filmes')
    let corpoTabela = tabela.getElementsByTagName('tbody')[0]
    //destruir a tabela
    corpoTabela.innerHTML = ""
    //recontruir o corpo da tabela
    for (let filme of filmes) {
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse
    }
}
async function obterFilmes() {
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data
    listarFilmes(filmes)
}
async function cadastrarFilme() {
    //montar a url de acesso, USANDO A CRASE
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    //capturar os inputs, trazendo para variaveis locais
    let tituloInput = document.querySelector('#tituloInput')
    let sinopseInput = document.querySelector('#sinopseInput')
    let titulo = tituloInput.value
    let sinopse = sinopseInput.value
    if(titulo && sinopse){
        //limpar os campos de digitação0
        tituloInput.value = ""
        sinopseInput.value = ""
        // enviar os dados capturados e receber a coleção de filmes atualizadas 
        const filmes = (await axios.post(URLcompleta, { titulo, sinopse })).data
        listarFilmes(filmes)
    }
    else{
        let alert = document.querySelector('.alert')
        alert.classList.add('show')
        alert.classList.remove('d-none')
        setTimeout(() =>  {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        },2000)
    }
}
