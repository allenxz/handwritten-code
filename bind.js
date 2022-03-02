Function.prototype.myBind = function (context) {
  const _this = this
  const args = [...arguments].slice(1)

  return function F () {
    if (this instanceof F) {
      return new this(...args, ...arguments)
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

// test
const m = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = m.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.myBind(m);
console.log(boundGetX());