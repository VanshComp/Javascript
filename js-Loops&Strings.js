//Loops AND Strings
//Prac1.Print all even numbers from 0 to 100.
for(let i=0;i<101;i++){
    if(i%2===0){
        console.log(i);
    }
}
//Prac2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let newnum=prompt("Enter any random number: ");
let num=25;
while(newnum!=num){
    newnum=prompt("Try again...: ");
}
//prac3. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”.
let Fullname=prompt("Enter your full name: ");
let username="@"+Fullname+Fullname.length;
console.log(username);