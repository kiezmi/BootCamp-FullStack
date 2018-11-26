var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    // Only change code below this line.
    let r = Math.floor(Math.random() * 10);

    return r;
}

/* Create a function called randomRange that takes a range
 myMin and myMax and returns a random number that 's greater than or equal to myMin,
  and is less than or equal to myMax, inclusive. */

function randomRange(myMin, myMax) {


    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

////////////////////////////////////////////////////////////////////////////////////////////

/* 
The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the number in the string.
 The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix); */

function convertToInteger(str) {
    let b = parseInt(str,2);
  
    return b;
  }
  
  convertToInteger("10011");

  ////////////////////////////////////////////////////////////////////////////////////////////
  