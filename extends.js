function inheritPrototype(Sub, Super) {
  const subPrototype = Object.create(Super.prototype)
  subPrototype.construction = Sub
  Sub.prototype = subPrototype
}

function Super (name) {
  this.name = name
}

Super.prototype.sayHello = function () {
  console.log(this.name)
}

function Sub (name) {
  Super.call(this, name)
}

inheritPrototype(Sub, Super)

// test
const instance = new Sub('joe')
console.log(instance.__proto__ === Sub.prototype)
console.log(instance.__proto__.__proto__ === Super.prototype)