// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (var i = 0, l = musicians.length;i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts) {
  const arr = []
  var i = 0
  const l = facts.length
  while (i < l) {
    arr.push(`${facts[i]}!!!`)
    i = i + 1
  }
  return arr
}
function iLoveTheBeatles(n) {
  const ar = []
  var i = 0
  var l = 15 - n
  function incrementVariable() {
    i = i + 1
  }
  if (n < 15) {
    do {
    ar.push("I love the Beatles!")
    incrementVariable()
    }while(i < l)
  }else {
    ar.push("I love the Beatles!")
  }
  return ar
}
