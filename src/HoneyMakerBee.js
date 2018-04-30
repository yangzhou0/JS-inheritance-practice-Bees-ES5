var HoneyMakerBee = function() {
  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype.eat = function(){};
HoneyMakerBee.prototype.makeHoney = function (){
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function (){
  this.honeyPot--;
};
