/* **** banner**** */
class typeWriting {
  constructor(a) {
      this.element = a, this.words = JSON.parse(a.getAttribute('data-words')),
          this.speed = parseInt(a.getAttribute('data-speed'), 10) ||
          100, this.delay = parseInt(a.getAttribute('data-delay'), 10) ||
          1e3, this.loop = a.getAttribute('data-loop'), this.char = '',
          this.counter = 0, this.isDeleting = !1, this.type()
  }
  type() {
      const a = 'yes' === this.loop ?
          this.counter % this.words.length : this.counter, b = this.words[a];
      let c = this.speed; if (this.isDeleting ? (c /= 2, this.char = b.substring(0, this.char.length - 1)) : this.char = b.substring(0, this.char.length + 1), this.element.innerHTML = `<span class="write">${this.char}</span><span class="blinking-cursor">|</span>`, !this.isDeleting && this.char === b) { if ('no' === this.loop && this.counter >= this.words.length - 1) return; this.isDeleting = !0, c = this.delay } else this.isDeleting && '' === this.char && (this.isDeleting = !1, this.counter++); setTimeout(() => this.type(), c)
  }
} document.addEventListener('DOMContentLoaded', init); function init() {
  document.querySelectorAll('.typewrite').forEach(a => new typeWriting(a))
}



/* ********** musica ********** */
document.addEventListener('DOMContentLoaded', function() {
  const musicBtn = document.querySelector('.music-btn');
  const audio = document.getElementById('bg-music');
  let playing = false;

  musicBtn.addEventListener('click', function() {
    if (!playing) {
      audio.play();
      playing = true;
      musicBtn.classList.add('playing');
    } else {
      audio.pause();
      playing = false;
      musicBtn.classList.remove('playing');
    }
  });
});

// ===================
// Modales: Dress Code
// ===================

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

function enviarFormulario() {
  setTimeout(() => {
    alert('¡Gracias por tu respuesta!');
  }, 300);
}
// =================== //
function mostrarItinerario(plan) {
  const items = document.querySelectorAll("#itinerario .timeline-item");

  items.forEach(item => {
    const tipo = item.getAttribute("data-plan");

    if (plan === "finde" && tipo === "extendido") {
      item.classList.add("oculto");
    } else {
      item.classList.remove("oculto");
    }
  });
}



