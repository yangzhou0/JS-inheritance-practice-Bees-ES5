var ForagerBee = function() {

  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'find pollen';
  this.honeyPot = 0;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype.eat = function(){};
ForagerBee.prototype.forage = function(item){
  this.treasureChest.push(item);
};
