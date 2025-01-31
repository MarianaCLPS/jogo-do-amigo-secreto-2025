
let amigos = [];


function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

   
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
    } else {
        alert("Nome inválido ou já adicionado.");
    }

    
    nomeInput.value = '';
    nomeInput.focus();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }


    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    

    resultado.innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`;
}
