class Player {
  constructor (name, goals) {
    this.name = name,
    this.goals = goals
  }
  logGoals() {
    console.log(`${this.name} fez ${this.goals}`)
  }
}

var gabigol = new Player('Gabigol', 1000)
