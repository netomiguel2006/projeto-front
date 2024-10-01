//console.log('hello, NoneJs!!!')
const express = require('express')
const app = express()
app.use(express.json())

let filmes = [
    {
        titulo: "Oppenheimer",
        sinopse: "Oppenheimer é um longa-metragem biográfico estadunidense escrito e dirigido por Christopher Nolan. É baseado no livro American Prometheus, biografia de J. Robert Oppenheimer escrita por Kai Bird e Martin J. Sherwin. É uma coprodução entre Syncopy Inc. e Atlas Entertainment; Nolan produziu o filme ao lado de Emma Thomas e Charles Roven."
    },
    {
        titulo: "The Batman",
        sinopse: "The Batman é um filme de super-herói estadunidense, baseado no personagem Batman da editora DC Comics, um reboot da franquia Batman produzido pela DC Films, 6th & Idaho e Dylan Clark Productions, e dirigido por Matt Reeves, roteirista junto com Peter Craig."
    }
]

//get: http://localhost:3000/filmes
app.get('/filmes', (req, res) => {
    res.json(filmes)
})

//get: http://localhost:3000/oi
app.get('/oi', (req, res) => {
    res.send('oi')
})

app.post('/filmes', (req, res) => {
    // pegar os dados enviados na requisição 
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    // montar o json do novo filme
    const novo_filme = { titulo: titulo, sinopse: sinopse }
    filmes.push(novo_filme)
    // mostrar ao ususario a base atualizada 
    res.json(filmes)
})

app.listen(3000, () => console.log("server up and running"))