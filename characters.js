import Display, {DisplayButtons} from './display.js'

export default class Character {
  constructor(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.name = name;
    this.state = "playing";
    this.spDmg = spDmg;
    this.spHeal = spHeal;
    this.spShield = spShield;
    this.spBoost = spBoost;
    this.spCost = spCost;
    this.spName = spName;
    this.spDesc = spDesc;
  }

  dealDamage(victim) {
    victim.takeDamage(this, this.dmg);
  }

  takeDamage(attacker, amount) {
    this.hp -= amount; 
    new Display(`${attacker.name} deals ${amount} damage to ${this.name} who now has ${this.hp} hp left.`);
    if (this.hp <= 0) {
      this.state = "loser";
      new Display(`${this.name} is dead.`)
      attacker.mana += 20;
      new Display(`${attacker.name} gains +20 mana for a new total of ${attacker.mana}.`);
    }
  }

  specialAttack(victim) {
    if (this.mana >= this.spCost) {
      this.mana -= this.spCost;
      new Display(`${this.name} casts ${this.spName}.`); 
      if (this.spShield > 0) {
        this.shield += this.spShield;
        new Display(`${this.name} now has a shield absorbing ${this.spShield} damage out of every attack during this turn.`);
      }
      if (this.spDmg > 0) {
        new Display(`${this.name} deals ${this.spDmg - victim.shield} damage to ${victim.name}.`);
        victim.takeDamage(this, this.spDmg);
      }
      if (this.spHeal > 0) {
        this.hp += this.spHeal;
        new Display(`${this.name} gets ${this.spHeal} hp back.`);
      }
      if (this.spBoost > 0) {
        this.dmg += 1;
        new Display(`${this.name}'s regular attack now deals ${this.spBoost} additional damage.`);
        if (this.hp > 1) {
          this.hp -= 1;
          new Display(`${this.name}'s rage reduces hp by 1.`);
        }
      }
    }
    else {
      new Display(`You don't have enough mana, so you use your regular attack`);
      this.dealDamage(victim);
    }
  }
}

// Dark Vision 5dmg 2shield -20mana
export class Fighter extends Character {
  constructor( hp = 12, mana = 40, dmg = 4, name = 'Grace', spDmg = 5, spHeal = 0, spShield = 2, spBoost = 0, spCost = 20, spName = 'Dark Vision', spDesc = "Deals 5 dmg, gives 2 shield for the turn, costs 20 mana") {
    super(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc);
  }
}

// Healing Lighting 4dmg 5heal -40mana
export class Paladin extends Character {
  constructor( hp = 16, mana = 160, dmg = 3, name = 'Ulder', spDmg = 4, spHeal = 5, spShield = 0, spBoost = 0, spCost = 40, spName = "Healing Lighting", spDesc = "Deals 4 dmg, restores 5 hp, costs 40 mana. ") {
    super(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc);
  }
}

// Heal 8heal -25mana
export class Monk extends Character {
  constructor( hp = 8, mana = 200, dmg = 2, name = 'Moana', spDmg = 0, spHeal = 8, spShield = 0, spBoost = 0, spCost = 25, spName = "Heal", spDesc = "Restores 8 hp, costs 25 mana.") {
    super(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc);
  }
}

// Rage dmg = dmg + 1, hp = hp - 1
export class Berzerker extends Character {
  constructor( hp = 8, mana = 0, dmg = 4, name = 'Draven', spDmg = 0, spHeal = 0, spShield = 0, spBoost = 1, spCost = 0, spName = "Rage", spDesc = "Increases dmg by one, decreases hp by one.") {
    super(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc);
  }
}

// Shadow hit 7dmg, no dmg, -20mana
export class Assassin extends Character {
  constructor( hp = 6, mana = 20, dmg = 6, name = 'Carl', spDmg = 7, spHeal = 0, spShield = 100, spBoost = 0, spCost = 20, spName = "Shadow hit", spDesc = "Deals 7 dmg, shields from all attacks for 1 turn, costs 20 mana.") {
    super(hp, dmg, mana, name, spDmg, spHeal, spShield, spBoost, spCost, spName, spDesc);
  }
}

