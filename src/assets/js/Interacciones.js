document.addEventListener('DOMContentLoaded', function () {
    var scrollLink = document.querySelector('.scroll-link');
    var targetTitle = document.getElementById('targetTitle');
  
    scrollLink.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      var targetPosition = targetTitle.offsetTop; // Posición vertical del título
      var offset = 20; // Ajusta el desplazamiento adicional según sea necesario
  
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth' // Desplazamiento suave
      });
    });
  });


  // Obtener el botón y el contenido de la página
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var content = document.querySelector(".content");

// Mostrar el botón cuando el usuario baja cierta cantidad de la página
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Función para desplazarse hacia arriba cuando se hace clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}

  