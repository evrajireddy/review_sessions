//1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

let arr=[2,5,6,8,9];
function findElement(arr, target){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return 'target';
        }
        
    }

    

}

console.log(findElement(arr,8));
console.log(findElement(arr,7));

// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

let newArr=[2,5,15,8,9];
function findElement(newArr, target){
    
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] > target){
            return newArr[i];
        }
        
    }

    

}

console.log(findElement(newArr,14));
console.log(findElement(newArr,7));



// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

let arrayString = ['venkata', 'ram', 'krishna', 'subbu', 'jen'];
function findString(arr, target){

    for(let i=0; i<arr.length; i++){
        if(arr[i].length>target){
            return arr[i]
        }
    }
}

console.log(findString(arrayString, 4));



// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/

let arrObj = [{
id: "Y42C_a",
name: "Robert",
occupation: "Chef",
eyeColor: "green"
}, {
    id: "Y42a_b",
    name: "John",
    occupation: "Chef",
    eyeColor: "green"
    }, {
        id: "Y42d_k",
        name: "Rob",
        occupation: "Chef",
        eyeColor: "green"
        }, {
            id: "Y42o_l",
            name: "peter",
            occupation: "Chef",
            eyeColor: "green"
            }];

function findObj(arrObj, target){
    for(let i=0; i<arrObj.length; i++){
        
        if(arrObj[i]['id'] === target){
            return arrObj[i];
        
        }
    }
}
console.log(findObj(arrObj, 'id')); 
console.log(findObj(arrObj, 'Y42o_l'));

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

function returnObject(newarrObj, target){
    const newObj = {};
    for(let i=0; i<newarrObj.length; i++){

        if(newarrObj[i]['name']===target){
             newObj.name = target;
        }
    }
return newObj;
}

console.log(returnObject(arrObj, 'Robert'));
console.log(returnObject(arrObj, 'peter'))

