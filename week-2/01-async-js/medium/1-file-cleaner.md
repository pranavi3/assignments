## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require('fs');
function fileCleaner(){
    fs.readFile('a.txt','utf8',(err,data)=>{
      let s = data.split('\n');
      let ans = '';
      for(let str of s){
        str = str.replace(/\s+/g,' ').trim();
        ans = ans + str + '\n';
      }
      fs.writeFile('a.txt',ans,(err,data)=>{
          if(err == null){
              console.log('Success');
          }
          else{
              console.log(err);
          }
      });
    })
}
fileCleaner();