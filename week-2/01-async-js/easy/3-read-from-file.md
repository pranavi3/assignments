## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
function read(){
  fs.readFile('a.txt','utf8',(err,data)=>{
      console.log(data);
  });
}
read();
let ans = 0;
for(let i = 0; i<100; i++){
  ans += i;
}
console.log(ans);
ans = 0;
for(let i = 0; i<1000; i++){
  ans += i;
}
console.log(ans);