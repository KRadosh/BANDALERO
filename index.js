var imee = prompt("What is your nejm?");
const buttons = document.querySelectorAll(".drum");
var fankšn = {
  f_w: "bandalo.mp3",
  f_a: "te.mp3",
  f_s: "laze.mp3",
  f_d: "ne_vjeruj.mp3",
  f_j: "sta.mp3",
  f_k: "ti.mp3",
  f_l: "kaze.mp3",
};

function muzika(ime) {
  new Audio("sounds/" + ime).play();
}

function playSound(ključ) {
  console.log(ključ);

  if (["w", "a", "s", "d", "j", "k", "l"].includes(ključ)) {
    muzika(fankšn["f_" + ključ]);
  }

  if (ključ === "x") {
    var keys = Object.keys(fankšn);

    keys.forEach((key, index) => {
      setTimeout(() => {
        muzika(fankšn[key]);
      }, 550 * index);
    });
  }
}

document.addEventListener("keydown", function (event) {
  var tipka = event.key.toLowerCase();
  playSound(tipka);
});

buttons.forEach(function (button) {
  button.addEventListener("click", () =>
    playSound(button.getAttribute("class")[0].toLowerCase())
  );
});
