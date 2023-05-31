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

});

function armazenaDados() {
    var nomeDados = document.getElementById('InputName');
    var comentarioDados = document.getElementById('InputText');

    var dadosArmazenados = JSON.parse(localStorage.getItem("dadosLocalizados"));
     
    if(dadosArmazenados == null){
        localStorage.setItem("dadosLocalizados", "[]");
        dadosArmazenados = [];
    }

    var auxilioRegistro = {
        nome: nomeDados.value,
        comentario: comentarioDados.value
    }

    dadosArmazenados.push(auxilioRegistro);

    localstorage.setItem("dadosLocalizados", JSON.stringify(dadosArmazenados));
};
