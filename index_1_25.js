
// 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -

// YOUR CODE HERE
function createObject(array){
    let elemObj ={};
    

    for(let i=0; i<array.length; i++){
         let element = array[i];
        if(elemObj[element]){
            elemObj[element]++;
        }else{

            elemObj[array[i]] = 1;
        }

    

    }
    return elemObj;
}

 Example:
array = ["apple", "orange", "apple", "banana", "apple", "orange"];
console.log(createObject(array));
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// YOUR CODE HERE

function findingElememt(obj, key){
    //let errorMessage = "the element doesnot exist in the object";
    if(obj[key]){
        return obj[key];
    }else{
        return "the element doesnot exist in the object";
    }
}

console.log(findingElememt({apple: 3, orange: 2, banana: 1}, "orange"));

// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};



// YOUR CODE HERE

person.address.street = 'new street';
console.log(person);

// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

const companyOrganizationalStructure = {
    companyName: "TechCorp",
    CEO: {
      name: "John CEO",
      office: {
        location: "Floor 10, Building A",
        employees: {
          executiveAssistant: {
            name: "Alice Executive",
            desk: "A101",
          },
        },
      },
    },
    departments: {
      development: {
        head: {
          name: "Bob Head",
          office: {
            location: "Floor 8, Building B",
            employees: {
              softwareEngineer1: {
                name: "Charlie Engineer",
                desk: "B801",
              },
              softwareEngineer2: {
                name: "David Coder",
                desk: "B802",
              },
            },
          },
        },
      },
      marketing: {
        head: {
          name: "Eva Marketer",
          office: {
            location: "Floor 6, Building C",
            employees: {
              marketingSpecialist1: {
                name: "Frank Specialist",
                desk: "C601",
              },
              marketingSpecialist2: {
                name: "Grace Promoter",
                desk: "C602",
              },
            },
          },
        },
      },
    },
  };
  
// YOUR CODE HERE
//a. Log the desk of the second software engineer in the development department
console.log(employee = companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk);
//b. Log the location of the head of the marketing department
console.log(location = companyOrganizationalStructure.departments.marketing.head.office.location);
//c. Log the name of the CEO's executive assistant
console.log(executiveAssistant = companyOrganizationalStructure.CEO.office.employees.executiveAssistant.name);
//d. Add yourself as a third software engineer to the development office
companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer3 = {
  name: "venkata",
  desk: "B803",
};
console.table(companyOrganizationalStructure.departments.development.head.office.employees);
//e. Update the name of the head of marketing to "Johann Marketer"
console.log( companyOrganizationalStructure.departments.marketing.head.name = "Johann Marketer");

// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

 key = "name";
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

const obj = { a: 1, b: 2, c: 3 };
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = {a: 1, b: 3, c: 4};




function comparingObjects(object, object1) {
  const keys1 = Object.keys(object);
  const keys2 = Object.keys(object1);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object[key] !== object1[key]) {
      return false;
    }
  }

  return true;
}

console.log(comparingObjects(obj, obj1));
console.log(comparingObjects(obj, obj2));


