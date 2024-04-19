const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);


let count = 0; //define count - this should not be within the loop
let countOfStartingA = 0;
let countOfStartingNum =0;

 for (line of lines) {

      elements = line.split(",");
      console.log(elements[1]); //lists length of each of the password
      count += (elements[1].length); //counts all of the characters in each password
      if (elements[1][0] == "a" || elements[1][0]== "A"){ //this produces the passwords that start with an A 
      countOfStartingA ++
      }
      if (elements[1][0] == /^[0-9]$/){ //this presents the number of passwords that start with a number 
        countOfStartingNum++  
        }
 }
console.log(countOfStartingA,countOfStartingNum);
// Take your time to read and understand the code. Explain lines in turn to your partner. 
//This program is unfinished. Can you count the length of each password and keep a running total which is displayed at the end?
