function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  let result = "El" + myNoun + "es" + myAdjective + "y" + myVerb + "muy" + myAdverb;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

//console.log(result);

//////////////////////////////////////////////////////////////

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
     answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
        break;

      }
      // Only change code above this line  
      
      return answer;
  }

  sequentialSizes(7);

  /////////////////////////////////////////////////////////

  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
    
    switch(val) {
      case 1:
        answer = "There is no #1";
        break;
      case 7:
        answer = "Ate Nine";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case "bob":
        answer = "Marley" ;
        break;
      default:
        answer = "";
    }


    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  chainToSwitch(7);


  //////////////////////////////////////////////////////////

  function checkSign(num) {
    return (num === 0) ? console.log("zero") : (num > -1) ? "positive" : "negative";
  }
  console.log();
  checkSign(10);