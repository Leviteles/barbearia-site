// Rolagem suave ao clicar no menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Mensagem ao clicar no botão de WhatsApp
const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    console.log("Cliente clicou no WhatsApp");
  });
}
