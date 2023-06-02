const formadd = document.getElementById('formadicionacontato');
const contactname = [];
const contactnumber = [];
let linhas = '';
var telefoneInput = document.getElementById('inputnumber');
var telefoneMask = IMask(telefoneInput, {
    mask: '(00)00000-0000'
});

formadd.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizalista();
})

function adicionalinha() {
    const inputname = document.getElementById('inputname');
    const inputnumber = document.getElementById('inputnumber');

    if (contactname.includes(inputname.value)) {
        alert('Esse nome já foi adicionado!')
    } else if (contactnumber.includes(inputnumber.value)) {
        alert ('Esse número já foi adicionado!')
    } else {
        contactname.push(inputname.value);
        contactnumber.push (inputnumber.value);
    
        let linha = '<tr>';
        linha += `<td>${inputname.value}</td>`;
        linha += `<td>${inputnumber.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputname.value = '';
    inputnumber.value = '';
}

function atualizalista() {
    const corpotabela = document.querySelector('tbody');
    const fulaninho = document.getElementById('exname');
    const exnumber = document.getElementById('exnumber')

    corpotabela.innerHTML = linhas;
    fulaninho.innerHTML = '';
    exnumber.innerHTML = '';

}
