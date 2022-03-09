const inputUsuario = document.querySelector('.usuario');
const inputSenha = document.querySelector('.senha');
const btnEntrar = document.querySelector('.btn-entrar');

btnEntrar.addEventListener('click', function(){
    const user = inputUsuario.value;
    const senha = inputSenha.value;


    window.alert(`Usuário : ${user} || Senha: ${senha}`);
})

