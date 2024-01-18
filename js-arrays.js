//Arrays
//Prac1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
let a=[85,97,44,37,76,60];
let sum=0;
for(let i of a){
sum+=i;
}
let avg = sum/6;
console.log(avg);
//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let b=[250,645,300,900,50];
for(let i=0;i<b.length;i++){
    b[i]=b[i]*0.1;
}
console.log(b);
//Create an array to store companies -> “Bloomberg” , “Microsoft” , “Uber”, “Google” , “IBM” , “Netflix” a. Remove the first company from the array b. Remove Uber & Add Ola in its place c. Add Amazon at the end
let c=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//a
console.log(c.shift());