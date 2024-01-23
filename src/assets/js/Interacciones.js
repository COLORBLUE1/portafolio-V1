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
  