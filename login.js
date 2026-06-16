 function exibirMensagem(mensagem, tipo) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = mensagem;
    messageDiv.className = 'message ' + tipo;
}

function validarLogin(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === 'admin@example.com' && senha === 'admin123') {
        exibirMensagem('Login realizado com sucesso!', 'success');
    } else {
        exibirMensagem('E-mail ou senha incorretos. Tente novamente.', 'error');
    }
}

document.getElementById('loginForm').addEventListener('submit', validarLogin); 


 
