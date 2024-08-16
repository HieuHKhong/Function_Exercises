 
//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 

let grades = [100, 90, 80 ,88 , 60]

//TODO Create a Function: Create a function to calculate the average of the grades.
function average(){
    let total = 0;
    for (let i = 0; i < grades.length; i++){
        total += grades[i]
    }
    return total / grades.length;
}

let avr = average(grades);
console.log(letterGrade(avr))
//TODO Create Another Function: Create another function to determine the letter grade based on the average.
function letterGrade(avr) {
    if (avr >= 90 && avr <= 100){
        console.log("Your average is an A!")
    }else if (avr >= 80 && avr <= 89){
        console.log("Your average is an B!")
    }else if (avr >= 70 && avr <= 79){
        console.log("Your average is an C!")
    }else if (avr >= 60 && avr <= 69){
        console.log("Your average is an D!")
    }else if (avr <= 59){
        console.log("Your average is an E!")
    }

    return avr
}

 
 
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.

//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.


function dep(b){ // Deposit
    let deposit = parseInt(prompt("How much would you like to deposit?"));
    b = b + deposit
    return b;
}

function withd(b){ // Withdrawal
    let withdrawal = parseInt(prompt("How much would you like to withdraw?"));
    if (withdrawal <= b){
        b = b - withdrawal
    }else if (withdrawal > b){
        console.log("Insufficent balance.")
    }
    return b;
}
let balance = 200;
let choice1 = (prompt("Would you like to deposit money to your bank account? Y/N"))

if (choice1 === 'Y' || choice1 === 'y'){
    balance = dep(balance)
}else if(choice1 === 'N' || choice1 === 'n'){
}else{
    console.log("Invalid selection.")
}

let choice2 = prompt("Would you like to withdraw money from your bank account? Y/N")
if (choice2 === 'Y' || choice2 === 'y'){
    balance = withd(balance)
    console.log(balance)
}else if(choice1 === 'N' || choice1 === 'n'){
    console.log(balance)
}else{
    console.log("Invalid selection.")
}


 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
//TODO Define an Array: Define an array to store the tasks.

let todo = ["Clean the Bathroom", "Clean the backyard", "Clean the dishes", "Wash the laundry"]

//TODO Create Functions: Create functions to add a task and display the to-do list.

function addTask(arr, item){
    arr.push(prompt("What task would you like to add?"))
    return arr;
}

function removeAnItem(arr){
    // Removes the second item in the array which is "Clean the backyard"
    arr.splice(1, 1)
}

addTask(todo)
removeAnItem(todo)
for (let i = 0; i < todo.length; i++){
    console.log(todo[i])
}

//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.


 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
let temperature = parseInt(prompt("What is the temperature you are trying to convert?"))
let unit = prompt("What is the unit that you are trying to convert from? (Answer 'K' for kelvin, 'C' for celsius, 'F' for fahrenheit)")

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
if (unit === 'K' || unit === 'k'){
    console.log(`Inputed: ${temperature} ${unit}`)
    console.log(KelvinToCelsius(temperature.toFixed(2)) + " C");
    temperature = KelvinToCelsius(temperature);
    console.log(celsiusToFahrenheit(temperature) + " F");
}else if (unit === 'F' || unit === 'f'){
    console.log(`Inputed: ${temperature} ${unit}`);
    console.log(fahrenheitToCelsius(temperature.toFixed(2)) + " C");
    temperature = fahrenheitToCelsius(temperature);
    console.log(celsiusToKelvin(temperature.toFixed(2)) + " K");
}else if (unit === 'C' || unit === 'c'){
    console.log(`Inputed: ${temperature} ${unit}`);
    console.log(celsiusToFahrenheit(temperature.toFixed(2)) + " F");
    console.log(celsiusToKelvin(temperature.toFixed(2)) + " K")
}else{
    console.log("Invalid input")
}





function KelvinToCelsius(kelvinNum){
    kelvinNum = kelvinNum - 273.15
    return kelvinNum
}

function celsiusToKelvin(celsiusNum){
    celsiusNum = +celsiusNum + +273.15
    return celsiusNum

}
 
function fahrenheitToCelsius(fahrenheit){
    fahrenheit = (fahrenheit - 32) * 5/9
    return fahrenheit
}
 
function celsiusToFahrenheit(celsius){
   celsius = (celsius * 9/5) + 32
   return celsius
}


//! Music Playlist Manager
//? Create a program that allows the user to manage a playlist of songs.
 
//TODO Define an Array: Define an array to store the song titles.
let playlist = ["Take on me", "Clair de lune", "River flows in you", "As it was"];
//TODO Create Functions: Create functions to add a song, remove a song, and display the playlist.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the operations.
function addMusic(arr){
    arr.push(prompt("What song would you like to add on?"))
    return arr
}

function removeMusic(arr){
    arr.splice(2, 1)
    // removes the 3rd item in the array
}
//* Output Results: Use console.log to display the playlist after each operation.
 let choice = prompt("Would you like to add music to a playlist? (Y/N)")
    if (choice === 'Y' || choice === 'y'){
        addMusic(playlist)
    }

    removeMusic(playlist)

    console.log(playlist)



    //! Daily Temperatures
//? Create a program that processes daily temperature readings, calculates the average temperature, and identifies the highest and lowest temperatures.
 
//TODO Predefine an Array of Temperatures: Start with an array of numbers representing daily temperatures.
let temperatures = [72, 75, 79, 83, 78, 85, 90];

//TODO Calculate the Average Temperature: Write a function to calculate the average of the temperatures.
function averageTemp(){
    let avr = 0;
    for (let i = 0; i < temperatures.length; i++){
        avr += temperatures[i]
    }
    return avr / temperatures.length
}
//TODO Find the Highest Temperature: Write a function to find the highest temperature in the array.
function highestTemp(arr){
    let high = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > high ) {
            high = arr[i];
    }
}
    return high
}
//TODO Find the Lowest Temperature: Write a function to find the lowest temperature in the array.

function lowestTemp(arr){
    let low = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low == arr[i]
        }
    }
    return low
}
 
console.log(averageTemp(temperatures))
console.log(highestTemp(temperatures))
console.log(lowestTemp(temperatures))
