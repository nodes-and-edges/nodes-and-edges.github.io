window.onload = function() {
  if (document.location.pathname.endsWith("sugiyama.html")) {
    start_sugiyama();
  }else if (document.location.pathname.endsWith("eyeq.html")) {
    start_eyeq()
}

function start_sugiyama(){

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




function start_eyeq(){
  let map = new Map();
  map.set('Drusen', 'answers/drusen.gif');
  map.set('Macular neovascular membranes (MNV)', 'answers/mnv.jpg');
  map.set("Cotton-wool spots", "answers/cotton_wool_spots.jpg")
  map.set("Ora serrata", "answers/ora_serrata.jpg")
  map.set("CRAO", "answers/crao.gif")
  map.set("CRVO", "answers/crvo.jpg")
  map.set("retinitis pigmentosa", "answers/retinitis_pigmentosa.jpg")
  map.set("retinal layers", "answers/retina.jpg" )
  map.set("glia", "answers/glia.jpg")


  const main_div = document.getElementById("main_div");
  const east_div = document.getElementById("east_div");
  const west_div = document.getElementById("west_div");


  // const start = document.getElementById("start");
  const title = document.getElementById("quiz_question");
  const score_html = document.getElementById("quiz_score");

  const progressbar = document.getElementById("progress");



  let score = 0;
  let progress = 0;
  let level = 0;
  let stage = 0;
  let n_questions = 10; /* max number of questions in this round */
  let i_questions = 0; /* counter */

  /* tiles and match-tiles ########## ########## ########## ########## ########## */
  const prepareTile = (id) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.id = id;


    const text = document.createElement("p");
    text.innerText = id;
    tile.appendChild(text);

    console.log(map.get(id))
    /*tile.img = map.get(id);*/


    if (map.get(id) != null){

      const img = document.createElement("img");
      img.src = map.get(id); // Replace with your image path
      /*img.alt = "Description of the image"; // Accessibility description*/
      img.style.width = "300px"; // Set the width of the image
      img.style.height = "300px"; // Set the height of the image

      // Add the image to the tile
      tile.appendChild(img);
    }


    return tile;
  };

  const prepareMatch = (id) => {
    const tile = document.createElement("div");
    tile.classList.add("match");
    tile.id = id;
    return tile;
  };


  const prepareImage = (id) => {
    const tile = document.createElement("div");
    tile.classList.add("info-graphic");
    tile.id = id;

    if (map.get(id) != null){

      const img = document.createElement("img");
      img.src = map.get(id); // Replace with your image path
      /*img.alt = "Description of the image"; // Accessibility description*/
      img.style.width = "200px"; // Set the width of the image
      img.style.height = "200px"; // Set the height of the image

      // Add the image to the tile
      tile.appendChild(img);
    }


    return tile;
  };

  /* basic build function ########## ########## ########## ########## ########## */
  const basicBuildFunction = (id) => {
    const tile = prepareTile(id);
    /*tile.innerHTML = id;*/
    return tile;
  };

  /* shuffle ########## ########## ########## ########## ########## */
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


  /* levels ########## ########## ########## ########## ########## */

  const firstLevel = [

  
    

  ];

  const levelList = [
    
    {
      title: "What is the most &nbsp;<b><i>anterior</i></b>&nbsp; extent of the retina?",
      stages: [
        {
          tiles: ["ora serrata", "😪", "🫥", "😰"],
          correct: "ora serrata"
        },  /*
        {
          tiles: ["👻", "😶‍🌫️", "🍊", "🐼", "🐡", "😜"],
          correct: "🐼"
        }*/
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "What is the most common cause of&nbsp;<b><i>CRVO</i></b>&nbsp;(central retinal vein occlusion)?",
      stages: [
        {
          tiles: ["Hypertension (HTN)", "#a2fafb", "#ffbb00", "#ff0000"],
          correct: "Hypertension (HTN)",
          infographic: "CRVO"
        },
        
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "The&nbsp;<b><i>ora serrata</i></b>&nbsp;is the transition site between the retina and the ...",
      stages: [
        {
          tiles: ["Ciliary body", "Optic nerve", "Choroid"],
          correct: "Ciliary body",
          infographic: "Ora serrata"
        },
      ],
      buildFunction: basicBuildFunction
    },
    
    {
      title: "What is a sign of&nbsp;<b><i>dry AMD</i></b>&nbsp;(dry Age-Related Macular Degeneration)?",
      stages: [
        {
          tiles: ["Cotton-wool spots", 
                  "Macular neovascular membranes (MNV)", 
                  "Drusen"],
          correct: "Drusen"
        }
      ],
      buildFunction: basicBuildFunction
    },
      
    {
      title: "<b><i>Cherry red spot</i></b>&nbsp;is a fundoscopic finding in the macula, observed in ................. ",
      stages: [
        {
          tiles: ["Central retinal artery occlusion (CRAO)", "Central retinal vein occlusion (CRVO)", "Branch retinal vein occlusion (BRVO)"],
          correct: "Central retinal artery occlusion (CRAO)",
          infographic: "CRAO"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Which vessel&nbsp;<b><i>supplys</i></b>&nbsp;the eye with blood?",
      stages: [
        {
          tiles: ["central retinal artery", "central retinal vein"],
          correct: "central retinal artery"
        },
        {
          tiles: ["central retinal artery", "vortex vein"],
          correct: "central retinal artery"
        },
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Which is a sign for&nbsp;<b><i>retinitis pigmentosa</i></b>&nbsp;in CFP?",
      stages: [
        {
          tiles: ["attenuated blood vessels (1)", "drusen (1)", "aneurysm (1)", "subretinal hemorrhages (1)"],
          correct: "attenuated blood vessels (1)",
          infographic: "retinitis pigmentosa"
        },
        {
          tiles: ["pigmentary bone spicules (2)", "hard exudates (2)", "cotton-wool spots (2)", "geographic atrophy (2)"],
          correct: "pigmentary bone spicules (2)",
          infographic: "retinitis pigmentosa"
        },
        {
          tiles: ["waxy appearance of the disk (3)", "aneurysm (3)", "geographic atrophy (3)", "subretinal fluid (3)", "Cherry red spot (3)"],
          correct: "waxy appearance of the disk (3)",
          infographic: "retinitis pigmentosa"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "What are ganglion cells responsible for?",
      stages: [
        {
          tiles: ["transmitting visual information from the retina to the brain", 
          "converting the capture of photons into a nerve signal", 
          "maintaining the local environment that allows the visual process to function optimally"],
          correct: "transmitting visual information from the retina to the brain"
        } /* https://link.springer.com/chapter/10.1007/978-3-642-12041-1_2 */
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Which of the four glial cell types in the retina is the main one?",
      stages: [
        { /* https://link.springer.com/chapter/10.1007/978-3-642-12041-1_2 */
          tiles: ["Müller cells", "Astrocytes", "Microglia", "Oligodendrocytes"],
          correct: "Müller cells",
          infographic: "glia"
        },
      ],
      buildFunction: basicBuildFunction
    }, 
    {
      title: "The Bruch’s Membrane (BM) separates ...",
      stages: [
        {
          tiles: ["Choriocapillaris and RPE", "GCL and RNFL", "OPL and ONL" ,"RPE and Photoreceptors"],
          correct: "Choriocapillaris and RPE",
          infographic: "retinal layers"
        }
      ],
      buildFunction: basicBuildFunction
    },/*
    {
      title: "Top",
      stages: [
        {
          tiles: ["0", "-10", "-5", "-18"],
          correct: "-18"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        const px = document.createElement("div");
        px.style = `background-color: #000038; width: 50%; height: 50%; transform: translateY(${id}px); pointer-events: none`;
        tile.appendChild(px);
        return tile;
      }
    },
    {
      title: "???",
      stages: [
        {
          tiles: ["🦁", "🐻", "🦅", "🦓"],
          correct: "🦓"
        },
        {
          tiles: ["🐊", "🦌", "🦊", "🐶"],
          correct: "🦌"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Bigger than",
      stages: [
        {
          tiles: [">", "<", "=", "×", "÷"],
          correct: ">"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Later",
      stages: [
        {
          tiles: ["🕒", "🕗", "🕠", "🕚"],
          correct: "🕚"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "???",
      stages: [
        {
          tiles: ["🍆", "🌽", "🥕", "🍋"],
          correct: "🍋"
        },
        {
          tiles: ["🥔", "🧅", "🫑", "🍓"],
          correct: "🍓"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        tile.innerHTML = id;
        return tile;
      }
    },
    {
      title: "???",
      stages: [
        {
          tiles: ["🏀", "🥎", "🎱", "🏐"],
          correct: "🎱"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "School?",
      stages: [
        {
          tiles: ["🖋️", "📏", "🖍️", "🎒", "🔧"],
          correct: "🔧"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "???",
      stages: [
        {
          tiles: ["🏈", "⚽", "⚾", "🥎"],
          correct: "🏈"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Warmer",
      stages: [
        {
          tiles: ["#ff0000", "#ff3344", "#ff00ee", "#ff2222", "#ff9900"],
          correct: "#ff0000"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        tile.style.backgroundColor = id;
        return tile;
      }
    },
    {
      title: "Lighter",
      stages: [
        {
          tiles: ["#eeeedd", "#ccbbbb", "#bbcccc", "#ddccdd", "#aa99aa"],
          correct: "#eeeedd"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        tile.style.backgroundColor = id;
        return tile;
      }
    },
    {
      title: "Black",
      stages: [
        {
          tiles: ["#000000", "#000022", "#330000", "#111111", "#222200"],
          correct: "#000000"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        tile.style.backgroundColor = id;
        return tile;
      }
    },
    {
      title: "Light?",
      stages: [
        {
          tiles: ["🕯️", "💡", "🔦", "🧨"],
          correct: "🧨"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "???",
      stages: [
        {
          tiles: ["🐶", "🐱", "🐹", "🦊"],
          correct: "🦊"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Love?",
      stages: [
        {
          tiles: ["💜", "💙", "💚", "💛", "🩷", "💔"],
          correct: "💔"
        }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Moon?",
      stages: [
        { tiles: ["🌒", "🌓", "🌔", "🟡", "🌖", "🌗", "🌘", "🌑"], correct: "🟡" }
      ],
      buildFunction: basicBuildFunction
    },
    {
      title: "Drag and drop - Fovea",
      stages: [{ tiles: ["foveal pit", "foveal slope", "parafovea", "perifovea"], correct: "♟︎" }],
      buildFunction: basicBuildFunction
    },
    {
      title: "Death?",
      stages: [{ tiles: ["🪦", "👻", "💀", "⛄"], correct: "⛄" }],
      buildFunction: basicBuildFunction
    },
    {
      title: "America?",
      stages: [{ tiles: ["🇲🇽", "🇨🇺", "🇧🇷", "🇨🇴", "🇮🇹"], correct: "🇮🇹" }],
      buildFunction: basicBuildFunction
    },
    {
      title: "???",
      stages: [{ tiles: ["🥳", "🎊", "🎈", "🎉"], correct: "🎈" }],
      buildFunction: basicBuildFunction
    },
    {
      title: "Transparent",
      stages: [
        {
          tiles: ["#799df1", "transparent", "#60c1ec", "#7bd9de", "#cfb0d2"],
          correct: "transparent"
        }
      ],
      buildFunction: (id) => {
        const tile = prepareTile(id);
        tile.style.backgroundColor = id;
        return tile;
      }
    },
    {
      title: "???",
      stages: [{ tiles: ["🎸", "💻", "📱", "🪇"], correct: "🪇" }],
      buildFunction: basicBuildFunction
    },
    {
      title: "Match the pairs for MNV",
      stages: [
        {
          tiles: ["type 1", "type 2", "type 3"],
          correct: ["grown from the choroid below the RPE", "grown from the choroid through RPE", "grown from the retina toward the RPE"]
          /* https://pmc.ncbi.nlm.nih.gov/articles/PMC8945474/ */
          /*
        },
        {
          tiles: ["type 1", "type 2", "type 3"],
          correct: ["Ingrowth of vessels initially from the choriocapillaris into and within the sub-RPE space. Leads to varying types of PEDs.", 
                    "Neovascularization that originates from the choroid that traverses Bruch’s membrane and the RPE monolayer and then proliferates in the subretinal space.", 
                    "Neovascularization that originates from the retinal circulation, typically the deep capillary plexus, and grows toward the outer retina."]
                    // source: https://www.sciencedirect.com/science/article/pii/S0161642019322432
        } 
      ],
      buildFunction: (t, c) => {

        // alert(id)

        const tile = prepareTile(t);
        // tile.innerHTML = t;

        const match = prepareTile(c);

        return [tile, match];
      }

    },

    */
  ];

  

  const levels = [...firstLevel, ...levelList];

  shuffle(levels);

  const total_stages = levels.reduce((count, level) => count + level.stages.length, 0);
  const this_round_questions = total_stages > n_questions ? n_questions : total_stages; /* cut to 4 questions - no bueno todo */

  /*alert(total_stages)*/

  /* check tile ########## ########## ########## ########## ########## */
  const checkTile = (event) => {
    const correct = levels[level].stages[stage].correct;
    if (Array.isArray(correct)) { // && 
      // todo, needs more stuff here ...
      score = score + 2;
      score_html.innerHTML = score;
      winStage();
      progress += 100 / this_round_questions; // todo questions.length;
      document.getElementById("progress").style.width = progress + "%";
    }else if (event.currentTarget.id === correct) {
      score = score + 2;
      score_html.innerHTML = score;
      winStage();
      progress += 100 / this_round_questions; // todo questions.length;
      document.getElementById("progress").style.width = progress + "%";
    } else {
      score = score - 1;
      score_html.innerHTML = score;
      event.currentTarget.style.opacity = "30%";
    }
    
    /*alert("first")*/

    /*alert(progress + " " + this_round_questions)*/

  };

  /* generate level ########## ########## ########## ########## ########## */
  const generateLevel = () => {
    main_div.innerHTML = "";
    east_div.innerHTML = "";
    west_div.innerHTML = "";

    const currentLevel = levels[level];
    title.innerHTML = `${currentLevel.title}`; /* ${level}- */

    const tiles = currentLevel.stages[stage].tiles;
    const correct = currentLevel.stages[stage].correct;
    
    shuffle(tiles);

    if (Array.isArray(correct)){
      shuffle(correct);
      /*tiles.forEach((tile) => {*/
      for (let i = 0; i < tiles.length; i++) { 
        const [tileElement, matchElement] = currentLevel.buildFunction(tiles[i], correct[i]);
        tileElement.addEventListener("click", checkTile);
        /*matchElement.addEventListener("click", checkMatch);*/
        west_div.appendChild(tileElement);
        east_div.appendChild(matchElement);
      };

    }else if (currentLevel.stages[stage].hasOwnProperty("infographic")){
      const infographic = currentLevel.stages[stage].infographic;

      tiles.forEach((tile) => {
        const tileElement = currentLevel.buildFunction(tile);
        tileElement.addEventListener("click", checkTile);
        east_div.appendChild(tileElement);
      });

      infoElement = prepareImage(infographic)
      west_div.appendChild(infoElement);
      

    }else{
      tiles.forEach((tile) => {
        const tileElement = currentLevel.buildFunction(tile);
        tileElement.addEventListener("click", checkTile);
        main_div.appendChild(tileElement);
      });

    }
    


  };

  /* win game ########## ########## ########## ########## ########## */
  const winGame = () => {

    /*alert("second")*/


    main_div.innerHTML = "";
    east_div.innerHTML = "";
    west_div.innerHTML = "";


    main_div.style.fontSize = "2rem";
    main_div.innerHTML = `<p>Your score is ${score} ${
      score > (this_round_questions*2)-(this_round_questions*2/100*90) ? (score > (this_round_questions*2)-(this_round_questions*2/100*50) ? "😄" : "🤨") : "😨" /* (total_stages*2)-(total_stages*2/10) */
    } </p>`;

    score_html.innerHTML = '<button id="restart">Again!</button>'; /* why in the world is this not working??*/
    const button = document.getElementById("restart");
      button.addEventListener("click", () => {
        start_eyeq();
      });

    title.innerHTML = "THE END!";

  };

  /* win stage ########## ########## ########## ########## ########## */
  const winStage = () => {
    stage++;
    i_questions++;

    if (i_questions >= this_round_questions /*levels.length*/) { /* this_round_questions */ 
        /* quit after n questions */
        /*alert(i_questions + " >= " + this_round_questions)*/
        winGame();
        return;
    }

    if (stage >= levels[level].stages.length) {
      level++;
      stage = 0;
    }
    generateLevel();
  };


  /* init ########## ########## ########## ########## ########## */
  score_html.innerHTML = "You can do it!!"
  progressbar.style.width = progress + "%";
  generateLevel();

}

