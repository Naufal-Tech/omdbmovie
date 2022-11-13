function stringLength(str) {
  return (str.length > 0) ? str : ""
}

function findFirstBracket(str) {
  let indexFirstBracket = str.indexOf('(')
  return indexFirstBracket
}

function findLastBracket(str) {
  let indexLastBracket = str.indexOf(')')
  return indexLastBracket
}

function findStringInBracket(str, indexFirst, indexLast) {
  indexFirst += 1
  return (indexLast >= 0) ? str.substring(indexFirst, indexLast) : ""
}

function getAnswer(str) {
  let word = stringLength(str)
  let indexFirstBracket = findFirstBracket(str)
  let indexLastBracket = findLastBracket(str)
  return (indexFirstBracket >= 0) ? findStringInBracket(word, indexFirstBracket, indexLastBracket) : ""
}

// Test cases
let example = [
    'naufal',
    'nau(fal)abc',
    '123(456)789',
    '123(fal)456',
    '123()123',
    '()',
    '(nau',
    'fal('
  ]

let i = 0
example.forEach(example => {
  console.log(i, getAnswer(example));
  i++
});