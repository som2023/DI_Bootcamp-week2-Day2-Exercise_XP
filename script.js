/*------------EXERCISE_1-------------*/

let x = 5;
let y = 2;

if (5>2) {
    console.log("x is the biggest number");
}else{
    console.log("x is not large");
}
/*----------EXERCISE_2_Chihuahua----------------------*/ 

const newDog = ("Chihuahua");
console.log(newDog.length);
console.log(newDog.toLocaleUpperCase());
console.log(newDog.toLocaleLowerCase());
if (newDog == "Chihuahua") {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}
/*--------EXERCISE_3_Even_Or_Odd--------------------*/

const nbr = prompt("Enter a number please.");
if (nbr % 2 == 0) {
    alert(nbr+" is an even number");
} else {
    alert(nbr+" is an odd number");
    
}

/*------------------Exercise_Group_Chat-----------------*/ 

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users);

if (users.length == 0) {
console.log("no one is online");
} if (users.length == 1) {
console.log(users[0]+" is online"); 
}else if(users.length == 2){
console.log(users[0]+" and "+ users[1]+" are online");
 }else if ((users.length !== 2)) {
    console.log(users[0]+", "+ users[1]+" and 3 more are online"); 
}
