Function.prototype.myCall = function () {
  const context = Array.prototype.shift.call(arguments) || window

  context.fn = this
  const result = context.fn(...arguments)
  delete context.fn

  return result
}

// text
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);