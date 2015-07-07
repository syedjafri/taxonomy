var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.treasureChest=[];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor=ForagerBee;
ForagerBee.prototype.job='find pollen';
ForagerBee.prototype.canFly=true;
//ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage=function(value){
  this.treasureChest.push(value);
}
