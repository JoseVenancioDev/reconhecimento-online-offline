const info = document.getElementById("status");
const body = document.querySelectorAll("body");

function online() {
    info.innerHTML = "You are online";
    info.style.color = "green";

}

function offline() {
    info.innerText = "You are offline";
    info.style.color = "red";

}

// Verifica o status de conexão no carregamento da página
if (navigator.onLine) {
    online();
} else {
    offline();
}

// Adiciona eventos para mudanças no status de conexão
window.addEventListener('online', online);
window.addEventListener('offline', offline);
