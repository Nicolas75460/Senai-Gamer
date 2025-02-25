// Definindo a data do evento (15 de junho de 2025)
const targetDate = new Date("Jun 15, 2025 00:00:00").getTime();

// Função para atualizar o timer
function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculando os dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualizando os elementos no HTML
    document.getElementById("days-value").innerText = String(days).padStart(3, "0");
    document.getElementById("hours-value").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes-value").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds-value").innerText = String(seconds).padStart(2, "0");


    // Se o evento acontecer, mostrar "Evento Chegado!"
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("days-value").innerText = "00";
        document.getElementById("hours-value").innerText = "00";
        document.getElementById("minutes-value").innerText = "00";
        document.getElementById("seconds-value").innerText = "00";
        alert("O evento chegou!");
    }
}

// Atualiza a cada 1 segundo
const timerInterval = setInterval(updateTimer, 1000);