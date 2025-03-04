// mutable array

let arr=[1,2,3,4];
arr.push(10); //It adds 4 to the array
console.log(arr); 

arr[0]=0; // it updates the arr at index 0
console.log(arr);


arr.pop(); // removes the last index of arr
console.log(arr);


// immutable array
let inmutable_arr=[1,2,3,4,5,6];
let newinmutable_arr=[...inmutable_arr,7];
console.log("inmutable_arr: "+inmutable_arr);
console.log("newinmutable_arr: "+newinmutable_arr);


// Updating an Element Without Changing the Original Array
let number=[10,20,30];
let newnumber=number.map((num,index)=>(index===0?100:num));
console.log(number);
console.log(newnumber);

//deleting an element without changing the orginal Array
let deletenumber=number.filter(num=>(num!==10));
console.log(deletenumber)
