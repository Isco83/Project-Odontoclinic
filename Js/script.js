
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