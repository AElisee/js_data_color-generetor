const content = document.getElementById("content");

setInterval(() => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.background = color;
  content.textContent = color;
}, 1000);

// on pouvais mettre toute la logique dans un setInterval puis la jouer
// => setInterval(getColor, 1000)
// ou encore le h3 dans un innerHTML
