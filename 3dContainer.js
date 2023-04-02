/* convertir el elemento html de clase container en un elemnto que simule el movimiento 3D y que siga el movimiento del mouse */
const container = document.querySelector('.container');


function handleMouseMove(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
  
  container.addEventListener('mousemove', handleMouseMove);
  
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'none';
  });

  window.addEventListener('deviceorientation', (e) => {
    const xAxis = e.gamma / 25;
    const yAxis = e.beta / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });