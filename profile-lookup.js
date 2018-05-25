// https://www.freecodecamp.org/challenges/profile-lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName,prop){
 for(x=0; x < contacts.length; x++) {
  if(contacts[x].firstName === firstName){
   if(contacts[x].hasOwnProperty(prop)) {
    return contacts[x][prop];   
   } else { 
    return 'No such property'   
   }
  }
 }
    return 'No such contact';
    
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "kes"))
