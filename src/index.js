function coffeetime() {
  let name = prompt("What is your name? ");
  let coffee = prompt(" Do you like coffee ? ");
  coffee = coffee.toLowerCase();
  coffee = coffee.trim();
  if (coffee === "yes") {
    let heading = document.querySelector("h8");
    heading.innerHTML = "<strong>Hi " + name + "! <br>Let's keep in touch and have a cup of <em> coffee ☕️</em> one day!</strong>";
  } else {
    let heading = document.querySelector("h8");
    heading.innerHTML = "<strong>Hi " + name + "! <br>Let's keep in touch and maybe have a cup of <em> tea 🍵</em> one day!</strong>";
  }
}
let coffeeButton = document.querySelector("button");
coffeeButton.addEventListener("click", coffeetime);