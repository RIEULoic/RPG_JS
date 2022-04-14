class Character {
  constructor(hp, dmg, mana, name, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.name = name;
    this.status = status;
  };


  takeDamage = damage => {
    this.hp -= damage;
    console.log(this.name + 'a perdu' + damage + 'pv.');

    if (this.hp <= 0) {
      this.status = 'Deceased';
      console.log(this.name + 'est mort.');
      } else {
      console.log(this.name + 'a encore' + this.hp + 'pv.');
    };
  };

  dealDamage = victim => {
    victim.takeDamage(this.dmg);
  };

};




