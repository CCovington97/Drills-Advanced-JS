name = 'Connor Covington'
var name;
// let name;
console.log(name)

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('text 1') // First
let avg = findAvg(2, 2)
console.log('text 2', avg); // Third
function findAvg(a, b) {
    console.log('text 3') // Second
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apples', 'bananas', 'cherries', 'grapes', 'peaches', 'pears']
// let favFruit;
function printFruits() {
    let faveFruit = fruits[4]
    console.log(fruits[0])
    function printFaveFruit() {
        console.log(faveFruit)
    }
    // console.log(leastFave) // leastFave in undefined here because the parent function printFruits()
                              // doesn't have access to the variable leastFave because 
                              // 1). variables declared with let are not hoisted and 
                              // 2). it is declared after the function
    printFaveFruit()
}
printFruits()
let leastFave = fruits[2]
console.log(leastFave)

sayHello();
function sayHello() {
    console.log('Hello ' + name)
}

// alertText(); // doesn't work because the function isn't hoisted like normal because of the let variable keyword
let alertText = function() {
    alert('Hello there')
}
alertText(); // this works