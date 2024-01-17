//OPERATORS AND VARIABLES
/*practice 1-Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.*/
let num=prompt("Enter a number: ");
if(num%5==0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}
/*Write a code which can give grades to students according to their scores: 80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let marks=prompt("Enter marks: ");
if(marks>=80 && marks<=100){
    console.log("A");
}
else if(marks>=70 && marks<=89){
    console.log("B");
}
else if(marks>=60 && marks<=69){
    console.log("C");
}
else if(marks>=50 && marks<=59){
    console.log("D");
}
else{
    console.log("F");
}


