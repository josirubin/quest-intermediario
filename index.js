const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputTelefone = document.querySelector('#telefone');
const inputMensagem = document.querySelector("#mensagem");
const mensagemErro = document.querySelector(".erro");
const btnSubmeter = document.querySelector('#bnt-submeter');

btnSubmeter.addEventListener('click', (e) => {
    e.preventDefault()
    validarCampos();
})

function validarCampos(){
    if (inputEmail.value === "") {
        inputEmail.classList.add('erro-input')
        mensagemErro.style.display = 'block';
    }else{
        inputEmail.classList.add('sucesso-input')
        mensagemErro.style.display = "none";
    }

    if (inputNome.value === "") {
      inputNome.classList.add("erro-input");
      mensagemErro.style.display = "block";
    } else {
      inputNome.classList.add("sucesso-input");
      mensagemErro.style.display = "none";
    }

    if (inputTelefone.value === "") {
      inputTelefone.classList.add("erro-input");
      mensagemErro.style.display = "block";
    } else {
      inputTelefone.classList.add("sucesso-input");
      mensagemErro.style.display = "none";
    }

    if (inputMensagem.value === "") {
      inputMensagem.classList.add("erro-input");
      mensagemErro.style.display = "block";
    } else {
      inputMensagem.classList.add("sucesso-input");
      mensagemErro.style.display = "none";
    }
}