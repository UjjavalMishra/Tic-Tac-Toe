let Boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let btn = document.getElementById("start");
let winningCom = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let X = true;
let count = 0;

// function to hiding element 
function hide(x) {
  x.forEach(element => {
    element.style.visibility = "hidden";
  });
}

// function to handle click on start
function startHandler() {
  btn.addEventListener("click", () => Boxes.forEach(element => {
    element.style.visibility = "visible";
    element.innerText = "";
    count = 0;
  })
  )
}

// function for win 
function win(candidate) {
  if (candidate == "X") {
    msg.innerText = "X won";
  }
  if (candidate == "0") {
    msg.innerText = "0 won";
  }
  GameOver();
}

//function for Game-end sound 
function GameOver() {
  let sound = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg");
  sound.play();
}

//function for turn change 
function turnchange() {
  let sound = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
  sound.play();
}


// function for draw
function draw() {
  msg.innerText = " Its a draw";
  GameOver();
  hide(Boxes);
}

// function to check winner
function winchecker() {
  for (let i of winningCom) {
    let [element1, element2, element3] = [Boxes[i[0]].innerText,
    Boxes[i[1]].innerText,
    Boxes[i[2]].innerText]
    if ((element1 != "") && (element2 != "") && (element2 != "")) {
      if (element1 == element2 && element2 == element3) {
        win(element1);
        hide(Boxes);
      }
    }
  }
}

// function for handling clicks 
Boxes.forEach((element) => {
  element.addEventListener("click", () => {
    if (X) {
      X = false;
      element.innerText = "X";
      element.click = false;
      turnchange();
      element.disabled = "true";
    }
    else {
      X = true;
      element.innerText = "0";
      element.disabled = true;
      turnchange();
      element.disabled = "true";
    }
    count += 1;
    if (count === 9) {
      draw();
    }
    winchecker();
  })
})


startHandler();