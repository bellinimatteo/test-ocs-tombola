const numero = document.getElementById('numero');
const generatoreBtn = document.getElementById('generatoreBtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random()*90 + 1); 
  numero.textContent=randomNumber;
};

generatoreBtn.addEventListener('click',randomNumberGenerator ());
randomNumberGenerator();




