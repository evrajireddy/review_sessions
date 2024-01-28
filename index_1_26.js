// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 
/*
function replacingArray(arrayString){

    let newarrayString = [];
     let newString ='newString'.length = 5;

    for(let i=0; i<arrayString.length; i++){

        newarrayString.push(string_replace("arrayString[i]", "newString"))



    }

    return newarrayString;

}

console.log(replacingArray('arrayString'));
*/

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)
function stringLongerthanFiveCharacters(arrayString){

    let newarrayString = [];

    for (let i=0; i<arrayString.length; i++){

        if(arrayString[i].length>5){

        
        newarrayString.push(arrayString[i]);
    }
    }

    return newarrayString;

}


console.log(stringLongerthanFiveCharacters(['arrayString']));
// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters
function findLengthArray(array){
   /* let newArray = [];
    for(let string of array){
        if(string.length>5){
            newArray.push(string.length);
        }
    }
    return newArray;
    */
   return array.filter(str => str.length>5).map(str =>str.length)

}

console.log(findLengthArray(['arrayString', 'ray','venkata']));
// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

function sumEvenNumbers(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1,2,3,4,5,6]));

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)