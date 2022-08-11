// // Only change code below this line
// var a = 5;
// var b = 10;
// var c = "I am a";
// // Only change code above this line

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// // Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// // Variable assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;


// var camper = "James";
// var camper = "David";
// // console.log(camper);

// let myVar = 1;
// myVar += 5;
// console.log(myVar);

// // let a = 3;
// // let b = 17;
// // let c = 12;

// // Only change code below this line
// a += 12;
// b += 9;
// c += 7;

// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr)

// // Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// // Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// // Only change code below this line
// const wordBlanks = "Our " + myNoun + " is " + myAdjective + ", and he " + myVerb + " so " + myAdverb; // Change this line
// // Only change code above this line

// const myArray = [50, 60, 70];
// const myData = myArray[0]

// // Modify Array Data With Indexes
// // const myArray = [18, 64, 99];
// myArray[0] = 45;

// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];
  
//   const myData = myArray[2][1]; //Access Multi-Dimensional Arrays With Indexes  

//   // Manipulate Arrays With push()
// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3])

// // Manipulate Arrays With pop() | .pop() removes the last element from an array and returns that element.
// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray = myArray.pop()

// // Manipulate Arrays With shift() | That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift()

// // Manipulate Arrays With unshift() | .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// // Global vs. Local Scope in Functions
// const outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
//   const outerWear = "sweater"
//   // Only change code above this line
//   return outerWear;
// }
// myOutfit();

//  // Undefined Value returned from a Function
// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// function addFive() {
//   sum += 5;
// }

// // Only change code above this line

// addThree();
// addFive();

function processArg(num) {
    return (num + 3) / 5;
  }
  processArg(7)

//   console.log(processArg)


  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
  
  trueOrFalse(true);
  trueOrFalse(false);
  
    // Only change code above this line
  
  }

  // Inequality Operator
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

function example(num){
    if (num > 5 && num < 10) {
      return "Yes";
    }
    return "No";
}
example(5)

// IF | Else
function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
    } else if (num < 15) {
    return "Medium";
    } else if (num < 20) {
    return "Large";
    } else {
     return "Huge";
    }
  
    // Only change code above this line
  }
  testSize(7);

let lowercaseLetter = 'c'
    switch (lowercaseLetter) {
      case "a":
        console.log("A");
        break;
      case "b":
        console.log("B");
        break;
    }

    function caseInSwitch(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {
          case 1:
            answer = "alpha";
            break;
          case 2:
            answer = "beta";
            break;
          case 3:
            answer = "gamma";
            break;
          case 4:
            answer = "delta";
            break;
        }
        // Only change code above this line
        return answer;
      }
      caseInSwitch(1);