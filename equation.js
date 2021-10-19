

let dob = prompt("Enter your DOB"); // user  enters dob
// TO DO: Add Verification to ensure dob is entered in the proper
// format => MM/DD/YYYY
let dobString = dob.replaceAll('/', '') // remove / from user input
// console.log( dobString ); 

const firstSum = (dobString) => { 
    dobString = dobString.split('');   // split string by each individual char             
   let sum = 0;                               
    for (let i = 0; i < dobString.length; i++) {  
        sum += parseInt(dobString[i],10); // transform string to integer     
    }                                     // and add each integer 
    return sum;                                
}
let firstReduc = firstSum(dobString);   // Adding each integer gives us the first reduction, but we still have double digits 
                                        // So we need to divide the double digit number into single digits and add those together,
                                        
console.log(firstReduc);   

const addTwoDigits = (firstReduc) => {    

    let numString = firstReduc.toString()     // Transform double digit number int a string
    let numArray = numString.split('')        // Split string into single characters
    let digitOne = []                       
    let digitTwo = []


    for (let i = 0; i < numArray.length; i++){
      digitOne.push(numArray[0])                  //Push digits into arrays
      digitTwo.push(numArray[1])                      
    }
    for (let i = 0; i < digitOne.length; i++){
      digitOne.pop()                               // Then pop them back out of arrays
    }
    for (let i = 0; i < digitTwo.length; i++){
      digitTwo.pop()                                     
    }

    let numOne = parseInt(digitOne)   // Transform back int integers so now we have two integers we can add together
    let numTwo = parseInt(digitTwo)       
    let sum = numOne + numTwo
    return sum;                      
}

let secondReduc = addTwoDigits(firstReduc);

console.log(secondReduc);  // Now we have the second reduction,

// If we return 11, 22, or 33 stop here

// TO DO: Add loop to check after each reduction
// The loop will stop when either we reach number
// 11, 22, or 33 OR when our output is reduced to a single digit