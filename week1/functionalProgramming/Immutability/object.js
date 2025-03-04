// updating Objects directly

let person = {
    name: "Yujen",
    age: "21",
    address: "Pulchowk"
};

console.log("Original: " + JSON.stringify(person));  
person.address = "Kupondole";
console.log("Updated: " + JSON.stringify(person));


//Updating an Object (Immutable Way)
let newperson={...person,address:"patan"} 
console.log(newperson);
let {age,...deleteage}=person
console.log(deleteage);
