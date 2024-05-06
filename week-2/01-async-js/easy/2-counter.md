## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let c = 1;
function counter(){
  console.log(c);
    if(c>0){
        setTimeout(()=>{
            console.log(c);
        },1000);
      c++;
      counter();
    }
}
counter();





































































(Hint: setTimeout)