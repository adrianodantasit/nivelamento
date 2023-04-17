function create(name, goals) {
  
  let player = Object.create(playerMethods)
  player.name = name;
  player.goals = goals;
  return player;
}

var playerMethods = {
  log: function() {
    console.log(this.name, ' possui ', this.goals, ' gols em sua carreira.');
  }
}

 
 
 var gabigol = create('gabigol', 500);
 gabigol.log();
 
 
 var dudu = create('dudu', 100);
 dudu.log();