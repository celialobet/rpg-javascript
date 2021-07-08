class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40) {
    super(name, hp, dmg, mana);
  }

  // darkVision(victim) {
  //   console.log(`You are using Dark Vision on ${victim}`);
  //   if (this.dealDamage(5, victim) && this.mana >= 20) {
  //     this.mana -= 20;
  //   }
  // }
}
