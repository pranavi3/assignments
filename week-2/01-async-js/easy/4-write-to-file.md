## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
function write(data) {
  fs.appendFile("a.txt", data, (err, data) => {
    if (err == null) {
      console.log("successfully appended");
    }
  });
}
let data = "\nI love JavaScript";
write(data);
let ans = 0;
for (let i = 0; i < 100; i++) {
  ans += i;
}
console.log(ans);
