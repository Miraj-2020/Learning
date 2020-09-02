
for (var i=0; i<8; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var textRead = this.innerHTML;
    console.log(textRead);
    audioPlay(textRead);
    playAnimation(textRead);
  });
};


document.addEventListener("keypress", function(event){
  var textRead = event.key;
  var textRead = textRead.toUpperCase();
  audioPlay(textRead);
  playAnimation(textRead);
});

function audioPlay(textRead){
  switch (textRead) {
    case "A":
      var audio = new Audio("sounds/A.m4a");
      audio.play()
      break;

    case "B":
      var audio = new Audio("sounds/B.m4a");
        audio.play()
        break;

    case "C":
          var audio = new Audio("sounds/C.m4a");
          audio.play()
          break;

    case "D":
          var audio = new Audio("sounds/D.m4a");
            audio.play()
            break;

    case "E":
          var audio = new Audio("sounds/E.m4a");
          audio.play()
          break;

    case "F":
          var audio = new Audio("sounds/F.m4a");
          audio.play()
          break;

    case "G":
            var audio = new Audio("sounds/G.m4a");
            audio.play()
            break;

    case "H":
          var audio = new Audio("sounds/H.m4a");
          audio.play()
          break;
  };
};

function playAnimation(textRead){
  var selectButton = document.querySelector("."+textRead);
  selectButton.classList.add("shadow");

  setTimeout(function() {
      selectButton.classList.remove("shadow");
  }, 2000);
};
