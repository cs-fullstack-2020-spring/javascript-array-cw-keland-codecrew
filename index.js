// ### Exercise 1

// - Create the following array ```["John", "Paul", "George", "Pete"]```
// - Console.log ONLY Pete’s name from the list
// - Change Pete’s name to ‘Ringo’
// - Console.log the list
// - Add the name ‘Yoko’ to the list
// - Console.log the list

// let name = ["John", "Paul", "George", "Pete"];



// console.log(name[3]);

// name [3] = "Ringo";

// console.log(name);

// name.push("Yoko");

// console.log(name)

// ### Exercise 2
// - Write a program that asks the user to enter 4 ages. Save each of the ages into an array.
// - Console.log the list of names
// - Delete the third age.
// - Change the second element (NOT index 2, the second element) to a different age.
// - Console.log the list of names



//  !! : this will not count toward your grade bc it was not pushed by 3pm
let user1 =prompt("Enter age 1");

 let user2 =prompt("Enter age 2" );

let  user3 =prompt("Enter age 3" );
 
 let user4 =prompt ("Enter age 4" );

 let userAges =["user1,user2,user3,user4"];

 console.log (userAges);

 userAges.splice(2, 1);

 userAges[1]= 100;

 console.log(userAges)














