//There are various objects only available in browser like window and document

//we want to use math.js module here in hello.js to import we have a require fn
const math = require("./math");
//if not ./ then it will search in default installed packages and if used then will search in current directory

console.log(math.add(5,4));
console.log(math.sub(8,4));

