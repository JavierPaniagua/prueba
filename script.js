const rotatingImage = document.getElementById('rotating-image');

let rotationAngle = 0;

function rotateImage() {
  rotationAngle -= 1; // Cambia el valor para ajustar la velocidad de rotación

  rotatingImage.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;

  // Repite la animación
  requestAnimationFrame(rotateImage);
}

// Inicia la animación
rotateImage();
