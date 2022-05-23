const saber = document.querySelector('#on-off');
const saberOn = new Audio('sound/saber-on.mp3');
const saberOff = new Audio('sound/saber-off.mp3');

saber.addEventListener('change', function() {
  if (this.checked) {
    saberOn.play();    
  } else {
    saberOff.play();
  }
});
