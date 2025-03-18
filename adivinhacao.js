let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function chutar() {
    let palpite = parseInt(document.getElementById('palpite').value);
    let mensagem = document.getElementById('mensagem');
    let tentativas = document.getElementById('tentativas');

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    // decrementar tentativas restantes em -1 a cada jogada do usuário
    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Você acertou! O número secreto era " + numeroSecreto;
        document.getElementById('palpite').disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior.";
    } else {
        mensagem.textContent = "O número secreto é menor.";
    }

    tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto;
        document.getElementById('palpite').disabled = true;
    }
}