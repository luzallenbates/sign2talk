// ==========================================================
// FUNÇÃO DE CADASTRO (Usada em CadastroPageSign2Talk.html)
// Armazena dados no LocalStorage (simulando um JSON)
// ==========================================================
function cadastrarUsuario(event) {
    // Previne o recarregamento da página ao submeter o formulário
    event.preventDefault();

    // 1. Captura os valores dos campos (IDs do CadastroPageSign2Talk.html)
    const nome = document.getElementById('nomeUsuario').value.trim();
    const dataNascimento = document.getElementById('data-nascimento').value.trim();
    const email = document.getElementById('emailUsuario').value.trim();
    const senha = document.getElementById('senhaUsuario').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenhaUsuario').value.trim();

    // 2. Validações
    if (!nome || !dataNascimento || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // 3. Obtém a lista de usuários do LocalStorage
    // Se não existir, inicializa como um array vazio
    let usuarios = JSON.parse(localStorage.getItem('@usuarios')) || [];
    
    // 4. Verifica se o e-mail já existe (unicidade)
    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert('Este email já está cadastrado. Tente fazer login.');
        return;
    }

    // 5. Adiciona o novo usuário ao array
    usuarios.push({ 
        nome: nome, 
        dataNascimento: dataNascimento, 
        email: email, // Usado como identificador
        senha: senha 
    });

    // 6. Salva o array atualizado no LocalStorage (em formato JSON)
    localStorage.setItem('@usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso! Redirecionando para a página de Login.');

    // 7. Redirecionamento
    window.location.href = 'LoginPageSign2Talk.html'; // Redireciona para a página de login
}

// ==========================================================
// FUNÇÃO DE LOGIN (Usada em LoginPageSign2Talk.html)
// Busca os dados no LocalStorage (simulando um JSON)
// ==========================================================
function loginUsuario(event) {
    // Previne o recarregamento da página ao submeter o formulário
    event.preventDefault();

    // 1. Captura os valores dos campos (IDs do LoginPageSign2Talk.html)
    const emailDigitado = document.getElementById('EmailUsuarioLogin').value.trim(); // ID do campo de e-mail
    const senha = document.getElementById('Senha').value.trim(); // ID do campo de senha

    if (!emailDigitado || !senha) {
        alert('Por favor, preencha o email e a senha.');
        return;
    }

    // 2. Obtém a lista de usuários do LocalStorage
    let usuarios = JSON.parse(localStorage.getItem('@usuarios')) || [];
    
    // 3. Busca o usuário que corresponda ao e-mail E à senha
    const usuarioValido = usuarios.find(u => u.email === emailDigitado && u.senha === senha); 

    // 4. Lógica de autenticação
    if (usuarioValido) {
        alert(`Login realizado com sucesso! Bem-vindo(a), ${usuarioValido.nome}.`);
        
        // **OPCIONAL:** Armazenar o usuário logado para manter a sessão
        localStorage.setItem('@usuarioLogado', JSON.stringify({ nome: usuarioValido.nome, email: usuarioValido.email }));

        // Redirecione para a página principal do aplicativo
        // window.location.href = 'pagina-principal.html'; 
    } else {
        alert('Email ou senha incorretos. Tente novamente ou cadastre-se.');
    }
}