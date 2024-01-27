// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

const key = "name";
const value = "Roberto Robertson"

newObj = { "name":"Roberto Robertson" }
//["name"]="Roberto Robertson";



// 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS

// YOUR CODE HERE

function callObj(newObj){
    return newObj["name"];

}
console.log(callObj(newObj));

// ------------------------------------------------------------------------

// 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop