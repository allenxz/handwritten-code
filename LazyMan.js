class LazyManClass {
  constructor (name) {
    this.taskList = []
    this.name = name
    console.log(`Hi I am ${this.name}`)
    setTimeout(() => {
        this.next();
    }, 0);
  }
  eat (thing) {
    const that = this
    const fn = (function(t) {
      return function () {
        console.log(`I am eating ${t}`)
        that.next()
      }
    })(thing)
    this.taskList.push(fn)
    return this
  }
  sleep (time) {
    const that = this
    const fn = (function(t) {
      return function () {
        setTimeout(function () {
          console.log(`等待了${t}秒...`)
          that.next()
        }, t * 1000)
      }
    })(time)
    this.taskList.push(fn)
    return this
  }
  sleepFirst (time) {
    const that = this
    const fn = (function(t) {
      return function () {
        setTimeout(function () {
          console.log(`等待了${t}秒...`)
          that.next()
        }, t * 1000)
      }
    })(time)
    this.taskList.unshift(fn)
    return this
  }
  next() {
    const fn = this.taskList.shift()
    fn && fn()
  }
}

function LazyMan (name) {
  return new LazyManClass(name)
}

// test
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food