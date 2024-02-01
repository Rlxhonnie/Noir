async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
}
  
myDisplay();
  
  
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
  
var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");
