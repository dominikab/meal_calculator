
console.log('hello')

// variables
var tax = 0.1;
var tip = 0.02;

var people = [
  {
    name : 'Dominika'
  },
  {
    name : 'Rolf'
  },
  {
    name : 'Suan'
  }
];

var Calculator = function (tax,tip){
  this.tax = tax;
  this.tip = tip;
  this.diners = diners;
}

Calculator.prototype.addDiner = function(diner){
  this.diners.push(diner);
}

Calculator.prototype.getSubtotal = function(){
  var subtotal = 0;
  for (var i=0; i<diner.length; i++){
    subtotal += diner.subtotal;
  }
}

var mealCalculator = new Calculator(tax, tip);

var Diner = function (name){
  this.name = name;
  this.meals = [];
  this.cost = 0;
}

Diner.prototype.addMeal = function(meal){
  this.meals.push(meal);
  this.cost += meal.price;
}

Diner.prototype.printCost = function (){
  console.log("The cost now is ", this.cost);
}



var Meal = function (name, price){
  this.name = name;
  this.price = price;
};

Dish.prototype.name = function(){
  return this.name;
};

Dish.prototype.price = function(){
  return this.price;
}





