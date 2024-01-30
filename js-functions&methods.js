//1. Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.

function functiond(msg){
    let count=0;
for (const char of msg){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
console.log(count);
}

//2. Create an arrow function to perform the same task.

const functio=(str)=>{
    let count=0;
    for (const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}

//3. For a given array of numbers, print the square of each value using the forEach loop.

let arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach((val)=>{
    console.log("Square of %d is %d",val,val*val);
})

//4.We are given array of marks of students. Filter our of the marks of students that scored 90+

let arr=[23,34,4,5,67,68,78,89,90,92,94,97,99,100];
let newarr=arr.filter((val)=>{
    if(val>90){
        console.log(val);
    }
})

//5. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array
let arr=[];
let n=prompt("Enter any number");
for(let i=1;i<=n;i++){
    arr[i]=i;
}
console.log(arr);
const newarr=arr.reduce((res,val)=>{
    return res+val;}
);
console.log(newarr);
let factorial=arr.reduce((val,cur)=>{
return val*cur;
});
console.log("Factorial is ",factorial);