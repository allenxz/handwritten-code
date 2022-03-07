const myNew = function (construction, ...rest) {
  const newObj = Object.create(construction.prototype)

  const result = construction.apply(newObj, rest)

  return typeof result === 'object' ? result : newObj
}