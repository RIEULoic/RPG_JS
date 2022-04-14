class Game {
  constructor(fighter, paladin, turnLeft = 10) {
    this.fighter = fighter;
    this.paladin = paladin;
    this.turnLeft = turnLeft;
  };

  newTurn = () => {
    this.turnLeft--;
    console.log("Il reste " + this.turnLeft + "tours avant la fin du jeu.");
  };

  watchStats = () => {
    if(paladin.status == "Deceased") {
        console.log("Le paladin est mort.");
    } else {
        console.log("Paladin: " + this.paladin.name + " " + this.paladin.hp + " " + this.paladin.mana + " ");
    };

    if(fighter.status == "Deceased") {
        console.log("Le fighter est mort.");
    } else {
        console.log("Fighter: " + this.fighter.name + " " + this.fighter.hp + " " + this.fighter.mana + " ");
    };
  };
};

