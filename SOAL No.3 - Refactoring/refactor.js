myString = "wo(k)e"

var result = myString.substring( myString.indexOf( '(' ) + 1, myString.indexOf( ')' ) );


console.log(result);