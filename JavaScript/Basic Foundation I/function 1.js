//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
var arr = [];
function number(){
for (let i = 1 ; i <= 255; i++){
arr.push(i);
}
return arr;
}
console.log(number())

//Get even 1000 - Write a function that would get the sum of all 
//the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
var sum = 0;
function sumOfEven(){
for (let i = 1 ; i <= 1000; i++){
if(i%2 == 0){
sum += i;
}
}
return sum;
}

console.log(sumOfEven())

//Sum odd 5000 - Write a function that returns 
//the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
var sum = 0;
function sumOfOdd(){
for (let i = 1 ; i <= 5000; i++){
if(i%2 != 0){
sum += i;
}
}
return sum;
}

console.log(sumOfOdd())

//Iterate an array - Write a function that returns 
//the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sum(arr){
var sum = 0;
for(let i = 0; i < arr.length; i++){
 sum += arr[i];
}
return sum;
}

//Find max - Given an array with multiple values, 
//write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var arr = [5,2,3,1,9,8,5];
function max(arr){
var max = arr[0];
for(let i = 0; i < arr.length; i++){
if(max < arr[i]){
max = arr[i];
}
}
return max;
}

//Find average - Given an array with multiple values, 
//write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var arr = [5,2,3,1,9,8,5];
function average(arr){
var avr = 0;
var sum = 0;
for(let i = 0; i< arr.length; i++){
sum += arr[i];
avr = sum/arr.length
}
return avr;
}

//Array odd - Write a function that would return an array of 
//all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArray(){
var arr = [];
for(let i = 1; i< 50; i++){
if(i%2 != 0){
arr.push(i);
}
}
return arr;
}

//Greater than Y - Given value of Y, write a function that takes an array and returns
// the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and
// Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greateThaY(arr, y){
var counter = 0;
for(let i = 0; i< arr.length; i++){
if(arr[i] > y){
counter++
}
}
return counter;
}

//Squares - Given an array with multiple values, write a function that replaces each value in 
//the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
for(let i = 0; i< arr.length; i++){
arr[i] *= arr[i]
}
return arr;
}

//Negatives - Given an array with multiple values, write a function that replaces any 
//negative numbers within the array with the value of 0. When the program is done the array 
//should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function removeNegatives(arr){
for(let i = 0; i< arr.length; i++){
if (arr[i] < 0){
arr[i] = 0;
}
}
return arr;
}

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array
// that only contains the maximum, minimum, and average values of the original 
//array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvr(arr){
var max = arr[0];
var min = arr[0];
var avr = 0;
var sum = 0;
for(let i = 0; i< arr.length; i++){
sum += arr[i]
if (max < arr[i]){
max = arr[i];
}
if (min > arr[i]){
min = arr[i];
}
}
avr = sum/arr.length
var newArr = [max, min, avr];
return newArr;
}

//Swap Values - Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapValue(arr){
var temp;
temp = arr[0];
arr[0] = arr[arr.length-1];
arr[arr.length-1] = temp;
return arr;
}

//Number to String - Write a function that takes an array of numbers and replaces any negative 
//values within the array with the string 'Dojo'. For example if array = [-1,-3,2], 
//your function will return ['Dojo','Dojo',2].

function numberToString(arr){
for( let i = 0; i < arr.length; i++){
if (arr[i] < 0){
arr[i] = "Dojo";
}
}
return arr;
}

