const inputName = document.getElementById('InputName');
const textComment = document.getElementById('InputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('ComentPost');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    armazenaDados()
    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${textComment.value}`;
    ComentPost.appendChild(p);
    inputName.focus();

    const existe = dadosArmazenados.find( elemento => elemento.inputName === inputName.value )

    if (existe) {
        auxilioRegistro.id = existe.id
        
        atualizaElemento(auxilioRegistro)

        dadosArmazenados[dadosArmazenados.findIndex(elemento => elemento.id === existe.id)] = auxilioRegistro
    } else {
        auxilioRegistro.id = dadosArmazenados[dadosArmazenados.length -1] ? (dadosArmazenados[dadosArmazenados.length-1]).id + 1 : 0;

        criaElemento(auxilioRegistro)

        dadosArmazenados.push(auxilioRegistro)
    }
});

function armazenaDados() {
    var nomeDados = document.getElementById('InputName');
    var comentarioDados = document.getElementById('InputText');

    var dadosArmazenados = JSON.parse(window.localStorage.getItem("dadosLocalizados"));

    if (dadosArmazenados == null) {
        window.localStorage.setItem("dadosLocalizados", "[]");
        dadosArmazenados = [];
    }

    var auxilioRegistro = {
        nome: nomeDados.value,
        comentario: comentarioDados.value
    }

    dadosArmazenados.push(auxilioRegistro);

    window.localStorage.setItem("dadosLocalizados", JSON.stringify(dadosArmazenados));
};

function criaComment() {
    var LocalDados = window.localStorage.push("dadosLocalizados");

    localDados = function criaElemento(commentPost){
        event.preventDefault();
        armazenaDados()
        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap flex-wrap';
        p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${textComment.value}`;
        ComentPost.appendChild(p);
    }
}