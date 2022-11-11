var matches = string2.split('(')
  .filter(function(v){ return v.indexOf(')') > -1})
  .map( function(value) { 
    return value.split(')')[0]
  })

let string2 = 'siap(ok)siap'

console.log( matches('siapok') );