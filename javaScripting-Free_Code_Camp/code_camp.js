var count = 0;

function cc(card) {
    // Only change code below this line

    if (card > 1 && card < 7) {
        count += 1;
    } else if (card > 6 && card < 10) {
        count += 0;
    } else if (card = 10 || typeof card !== 'number') {
        count -= 1;
    }

    if (count > 0) {
        // return console.log(count + " Bet");
        //return count + " Bet";
    } else if (count <= 0) {
        // return console.log(count + " Hold");
        // return count + " Hold";
    };

    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//////////////////////////////////////////////////////

