
function abrirFormularioCita() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('citaForm').style.display = 'block';
}

function cerrarFormularioCita() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('citaForm').style.display = 'none';
}

// Muestra las animaciones scroll-fade hecho con AI--->
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));
});

// Muestra chatbot--->

function toggleChat() {
  const box = document.getElementById('chatbox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;
  const chat = document.getElementById('chat');

  // Mostrar mensaje del usuario
  const userMsg = document.createElement('p');
  userMsg.className = 'user';
  userMsg.textContent = message;
  chat.appendChild(userMsg);
  chat.scrollTop = chat.scrollHeight;
  input.value = '';

  // Llamada a OpenAI (reemplaza con tu API key segura en backend en producción)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer TU_API_KEY_AQUI"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres un asistente virtual amable especializado en odontología de OdontoClinic." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const botReply = data.choices?.[0]?.message?.content || 'Lo siento, hubo un error.';

  const botMsg = document.createElement('p');
  botMsg.textContent = botReply;
  chat.appendChild(botMsg);
  chat.scrollTop = chat.scrollHeight;
}

