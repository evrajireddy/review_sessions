// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

// function capitalizeWord(string){

//   let newString = "";

//   for(let i = 0; i<string.length; i++){

//     newString += string[i].toUpperCase()

//   }
//   return string.toUpperCase()

//   // "have a nice day"
//   // "HAVE A NICE DAY"
//   // "Have A Nice Day"
// }

function capitalizeEachWord(string) {
  const splitString = string.split(" ")
  for (let i = 0; i < splitString.length; i++) {
    const word = splitString[i]
  //index 0 "have"          "H"            + "ave"
  //index 1 "a"             "A"
  //index 2 "nice"          "N"            + "ice"
  //index 3 "day"           "D"            + "ay"
    splitString[i] = word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  //splitString = ["Have", "A", "Nice", "Day"]
  return splitString.join(" ")
}

console.log(capitalizeEachWord("have a nice day"))

// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 

function formatGreeting(obj){
  
  return "Hello "+ obj.firstName + " " + obj.lastName + ", have a great day at your job as a "+ obj.occupation ;

  
}


 const john = {
  firstName: "John",
  lastName: "Klaus",
   occupation: "Carpenter"
 }

 const rebecca = {
  firstName: "Rebecca",
   lastName: "Cohen",
   occupation: "Teacher"
 }

console.log(formatGreeting(john) );
console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")
/*
// 3.----------------------------------
// Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.

/* Example Object
{
  id: "Tfjso_4M"
  firstName: "John",
  lastName: "Klaus",
  occupation: "Carpenter"
}
*/