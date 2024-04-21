/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let time1 = time();
    sum(n);
    let time2 = time();
    return (time2-time1);
}
function sum(n){
    let ans = 0;
    for(let i =1; i<n; i++){
        ans = ans+ i;
    }
}
function time(){ 
    const date1 = new Date();
    let time1 = date1.getTime();
    return time1;
}
console.log(calculateTime(1000000000));