const form = document.getElementById('formulario')
let tabelabody = '';
const dadossalvos = [];


form.addEventListener('submit', function(e){
    e.preventDefault()



    pegaDados()
    atualizaTabela()
})

function pegaDados(){
    const nomeusuario = document.getElementById('formularionome')

    const dddusuario = document.getElementById('ddd')

    const telefoneusuario = document.getElementById('numero')

    if (dadossalvos.includes(nomeusuario.value) || dadossalvos.includes(dddusuario.value) || dadossalvos.includes(telefoneusuario.value)) {
        alert('Telefone já cadastrado em outro usuário, digite outro!')
    } else {
        let linha = '<tr>'
        linha += `<td> ${nomeusuario.value} </td>`
        dadossalvos.push(nomeusuario.value)
        linha += `<td> ${dddusuario.value} </td>`
        linha += `<td> ${telefoneusuario.value} </td>`
        dadossalvos.push(telefoneusuario.value)
        linha += '</tr>'
        tabelabody += linha;
    }


     // Resetar o formulário
    form.reset();
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = tabelabody;
}