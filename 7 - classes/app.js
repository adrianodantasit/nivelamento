function create(name, goals) {
  
  // What new does
  //1 - let obj = {}
  //2 - this = obj
  //3 - this.__proto__ = create.prototype
  //4 - return obj
  this.name = name;
  this.goals = goals;
}

create.prototype.log = function() {
  console.log(`Goals: ${this.goals}`)
}

var gabigol = new create('gabigol',1000);
gabigol.log();