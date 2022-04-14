class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, name = 'Moana', status = 'Alive') {
    super(hp, dmg, mana, name, status);
    this.heal = heal;
  };
};
