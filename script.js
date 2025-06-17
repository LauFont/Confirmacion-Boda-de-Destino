const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz_kAOfJ0yGT0Hqum6jB3g-PStxpaqyU7NK4PqFeSQhUX7rTb9hIJu1X3t21TJdFz7RBQ/exec";

function mostrarItinerario(opcion) {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = opcion === 'corto'
        ? `<ul><li>Día 1: Llegada al hotel y cena de bienvenida 🍽️</li><li>Día 4: Boda y regreso 🥂✈️</li></ul>`
        : `<ul><li>Día 1: Llegada y cena bienvenida 🍽️</li><li>Día 2: City tour 🏙️</li><li>Día 3: Día de campo con asado 🔥</li><li>Día 4: Boda y regreso ✈️</li></ul>`;
}

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch("https://script.google.com/macros/s/AKfycbz_kAOfJ0yGT0Hqum6jB3g-PStxpaqyU7NK4PqFeSQhUX7rTb9hIJu1X3t21T/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("msg").innerText = msg === "Éxito"
      ? "¡Gracias por confirmar!"
      : "Hubo un error.";
    e.target.reset();
  })
  .catch(() => {
    document.getElementById("msg").innerText = "Hubo un error. Intenta nuevamente.";
  });
});


