function openmail(){
  window.open("mailto:evercaicedo46@gmail.com");
}

var app = document.getElementById('machine');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
});

typewriter
  .pauseFor(2300)
  .typeString('Hola, yo soy <span class="text-warning">Ever Caicedo </span>')
  .pauseFor(700)
  .deleteChars(13)
  .typeString('un Desorrallador Junior y un <strong>GEEK </strong> bastante curioso')
  .pauseFor(1000)
  .start();

