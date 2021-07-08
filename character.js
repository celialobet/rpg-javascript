class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "playing";
  }

  isAlive() {
    this.hp > 0;
  }

  takeDamage(dmg) {
    if (this.status === "playing") {
      this.hp -= dmg;
    }
    if (this.hp <= 0) {
      this.hp = 0;
      this.status = "loser";
      console.log(`${this.name}, you loose!`);
    }
  }

  dealDamage(victim) {
    if (victim.hp > 0) {
      victim.takeDamage(this.dmg);
      console.log(
        `${this.name} is attacking ${victim.name}. He deals him ${this.dmg} damages. ${victim.name} has now ${victim.hp} hp left.`
      );
    }
  }
}
