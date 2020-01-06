var desenhar = document.querySelector('.ml6 .letras');
desenhar.innerHTML = desenhar.textContent.replace(/\S/g, "<span class='letras'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letras',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });