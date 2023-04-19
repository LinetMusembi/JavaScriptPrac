//  1. Write a function that takes in a string and returns it when reversed
// let food = “eating”

// steps to follow when reversing a string
// split()---inorder to form a new array.
// Reverse()---to reverse the new created array.
// join()---to join all the elements of a string into an array.
let food = "eating"
function reversed (food){
    let food1 = food.split("").reverse().join()
    console.log(food1)
}
reversed(food)


let school = "AkiraChix"

function reverseSchool(school){;
    let schoolName = school.split("").reverse().join();
    console.log(schoolName);

};
reverseSchool(school);
// Mergesort..
// push()---adds a new element to an array and returns the new length of the array.
// shift()---Removes the element at zero index in an array.
// unshift()---adds an element at the beginning of an array.

//Write a function that takes in the following array and consoles the target if it is found else
//null  let num = [2,8,0,23,5,45,76] Target = 23

function unsortedArray(num){
    if(num.length<=1){
        return num
    }
let middle = Math.floor(num.length/2)
let left = num.slice(0,middle)
let right = num.slice(middle)
return sortedArray(unsortedArray(left),unsortedArray(right))
}
function sortedArray(left,right){
    let emptyArray = []
    while(left.length && right.length){
        if(left[0]>right[0]){
            emptyArray.push(left.shift)
        }
        else{
            emptyArray.push(right.shift)
        }
        return [...emptyArray,...left,...right]

    }
}
let num = [2,8,0,23,5,45,76]
let target = 23
console.log(target)


 // 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapYears(){
    for(let i = 2000;i<=2023;i++){
        if(i%4===0){
            console.log(i + "is a leap year")
        }
        else{
            console.log(i + "is not a leap year")
        }
    }
}
leapYears()

//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

function divisibleNumbers(){
    for(let i = 0;i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")

        }
        else if(i%5===0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
divisibleNumbers()

//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let array = [2,3,4,5,6,7,8]
const array1= array.map(function(element){
    return element*4

})
console.log(array1)
    


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
let nums =["10","24","45","56","67"]
function stringed(){
  return  nums.map(num=>+num)


}
console.log(stringed(nums));


