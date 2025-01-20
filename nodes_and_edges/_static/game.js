window.onload = function() {
  if (document.location.pathname.endsWith("sugiyama.html")) {
    alert("sugiyama")
    start_game();
  }
}

function start_game(){

  const game = document.getElementById("game");
  const game_title = document.getElementById("game_title");
  const scoreElement = document.getElementById("score");

  /*https://codepen.io/Pedro-Ondiviela/pen/jORgbbK*/

  let score = "Choose answer";

  /* needed but currently not useful*/
  let level = 0;
  let stage = 0;

  const prepareTile = (id) => {
    const game_title = document.createElement("div");
    game_title.classList.add("game_title");
    game_title.id = id;
    return game_title;
  };

  const basicBuildFunction = (id) => {
    const game_title = prepareTile(id);
    game_title.innerHTML = id;
    return game_title;
  };

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
  }

  const levels = [
    {
      question: "What is the main purpose of the Sugiyama framework?",
      stages: [
        {
          tiles: [
            "Calculating shortest paths",
            "Visualizing 3D graphs",
            "Minimising edge crossings in layered graphs",
            "Coloring nodes based on degrees"
          ],
          correct: "Minimising edge crossings in layered graphs"
        }
      ],
      buildFunction: basicBuildFunction
    }
  ];



  const checkTile = (event) => {
    if (event.target.id === levels[level].stages[stage].correct) {
      score = "Correct";

      event.target.style.border = "2px solid #6eaf7c"; 
      /*winStage();*/
    } else {
      score = "Wrong";
      /*event.target.style.border = "2px solid #D823C3"; */
      event.target.style.opacity = "30%";
    }
    scoreElement.innerHTML = score;
  };

  const generateLevel = () => {
    game.innerHTML = "";
    const currentLevel = levels[level];
    game_title.innerHTML = `${currentLevel.question}`;

    const tiles = currentLevel.stages[stage].tiles;
    shuffle(tiles);

    tiles.forEach((tile) => {
      const tileElement = currentLevel.buildFunction(tile);
      tileElement.addEventListener("click", checkTile);
      game.appendChild(tileElement);
    });
  };



  generateLevel();


}


