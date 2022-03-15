// 富途二面
const reverse = str => {
  if (str.length <= 1) {
    return str
  } else {
    const len = str.length, half = Math.floor(len / 2)
    const left = str.slice(0, half)
    const right = str.slice(half)
    return reverse(right) + reverse(left)
  }
}

console.log(reverse('abcdyutikhdgvcbnxh'))