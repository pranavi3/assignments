Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(){
  setInterval(()=>{
    let date = new Date();
    console.log(((date.getHours()<10)? '0'+date.getHours() : date.getHours())+ ":"+ ((date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes()) + ":" + ((date.getSeconds()<10)? '0'+date.getSeconds() : date.getSeconds()));
  },1000)
}
function clock12(){
  setInterval(()=>{
    let date = new Date();
    let hrs = date.getHours()>12? date.getHours()%12+12: date.getHours();
    let amP = date.getHours()>12? "PM" : "AM"
    console.log(((hrs<10)? '0'+hrs : hrs)+ ":"+ ((date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes()) + ":" + ((date.getSeconds()<10)? '0'+date.getSeconds() : date.getSeconds()) + " " + amP);
  },1000)
}
clock12();