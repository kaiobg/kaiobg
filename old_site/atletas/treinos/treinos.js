// Garantir que o array de exercícios esteja disponível
if (typeof exercises === 'undefined') {
    console.error("O array de exercícios não foi carregado. Verifique se o arquivo exercises.js foi incluído corretamente.");
} else {
    console.log("Exercícios carregados:", exercises);
}

// Função para renderizar os exercícios na página
function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
    exerciseList.innerHTML = ""; // Limpa o conteúdo antes de renderizar

    // Itera sobre os exercícios e cria os cards
    exercises.forEach((exercise, index) => {
        const card = document.createElement("div");
        card.className = "exercise-card";

        card.innerHTML = `
            <h3 onclick="playVideo(${index})">${exercise.name}</h3>
            <p>${exercise.description}</p>
            <label for="weight-${index}">Peso (kg):</label>
            <input type="number" id="weight-${index}" value="${exercise.weight}" onchange="updateWeight(${index}, this.value)" />
            <button onclick="markAsDone(this)">Marcar como Feito</button>
        `;

        exerciseList.appendChild(card);
    });
}


// Função para abrir o modal e reproduzir o vídeo
function playVideo(index) {
    const modal = document.getElementById("video-modal");
    const overlay = document.getElementById("overlay");
    const video = document.getElementById("exercise-video");

    video.src = exercises[index].video;
    video.setAttribute("autoplay", "true"); // Configurar reprodução automática
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Função para fechar o modal
function closeVideo() {
    const modal = document.getElementById("video-modal");
    const overlay = document.getElementById("overlay");
    const video = document.getElementById("exercise-video");

    modal.style.display = "none";
    overlay.style.display = "none";
    video.src = ""; // Limpar o src para parar a reprodução
}

// Função para atualizar o peso de um exercício
function updateWeight(index, value) {
    exercises[index].weight = parseFloat(value) || 0;
    console.log(`O peso para ${exercises[index].name} foi atualizado para ${exercises[index].weight} kg`);
}

// Função para marcar um exercício como feito
function markAsDone(button) {
    button.innerText = "Feito!";
    button.disabled = true;
    button.style.backgroundColor = "#4caf50";
    button.style.color = "white";
}

// Adiciona o evento para fechar o modal ao clicar na sobreposição
document.getElementById("overlay").addEventListener("click", closeVideo);

// Renderizar os exercícios ao carregar a página
document.addEventListener("DOMContentLoaded", renderExercises);
