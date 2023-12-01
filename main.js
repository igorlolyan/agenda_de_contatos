$(function(){

$('form').on('submit', function(e){
    e.preventDefault();

    pegaDados();
})

var nomesSalvos = [];
var numerosSalvos = [];

function pegaDados(){
    
    var nome = $('#nome').val()

    var ddd = $('#ddd').val()

    var numero = $('#numero').val()

    if(nomesSalvos.includes(nome) || numerosSalvos.includes(numero)) {
        alert('Nome ou Telefone já cadastrado meu querido.\nDigite outro 😁😁😁')
    } else {
            nomesSalvos.push(nome);
            numerosSalvos.push(numero);

            var dados = $(`
            <tr>
                <td>
                    ${nome}
                </td>
                <td>
                    ${ddd}
                </td>
                <td>
                    ${numero}
                </td>
            </tr>
            `)
        
            console.log(dados)
            dados.appendTo($('tbody'))

            $('#nome').val('');
            $('#numero').val('');
            $('#ddd').val('');
        }
    }
})