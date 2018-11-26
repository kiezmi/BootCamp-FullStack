// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
/* If prop isn't "tracks" and value isn't empty (""), 
up date or set the value for that record album's property.
*/
function updateRecords(id, prop, value) {
  if(value === '') {
    delete collection[id][prop];
  } else if(prop === 'tracks'){
    if(!Array.isArray( collection[id].tracks )) {
      collection[id].tracks = [];
    }
    collection[id]['tracks'].push(value); //--> `[]`le podemos pasar variables || `.` es la propiedad tal cual

  }else{
    collection[id][prop] = value;

  }
    console.log(collection);
  return collection;
}
console.log(collection);
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");