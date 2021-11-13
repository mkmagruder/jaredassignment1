//1. Press run and notice what happens

let returnedNumber = getNumber(5)
console.log(returnedNumber)

//Notice what this does. You pass the function one number. The function is written to take the number given to it and multiply it by itself.
//Think of functions as a generator that are dynamic and can do whatever you tell it to do.


//2. Write a number function that takes in two parameters which are numbers. This time, divide the two numbers given to the function and return the value.

//3. Assign a variable, as I did above to that function with any two numbers passed to it and log the value.




function getNumber(number){
    let squared = number * number
    return squared
}