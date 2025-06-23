    function seleccionarEstado(emoji) {
      alert(`Seleccionaste: ${emoji}`);
    }
    function irAVersionExtension() {
      window.location.href = 'extension.html';
    }

        function mostrarSeccion(nombre) {
      const secciones = document.querySelectorAll('.seccion');
      secciones.forEach(sec => sec.classList.remove('visible'));
      document.getElementById(`seccion-${nombre}`).classList.add('visible');
    }