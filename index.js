//create a way to convert a string to an array


// separate each letter of the string into it's own element within the array
//we'll get to these first two in a bit**

//arr1 = [7, 8, 9, 10, 11, 12];

// split the array in half
//const half = arr1.length/2;

// firstHalf = arr1.slice(0, half + 1);
// //let arrFirstHalf = [];
// secondHalf = arr1.slice(-half + 1);


// // compare the two halves.  If one is larger, return the element at the last index in the array.  
// //If both are the same size, return the element at the last index in the array in section 1, and 
// //the first element at the 0 index of the second half.

// function getMiddle(array) {
    
//     if (array[firstHalf.length] > array[Math.abs(secondHalf.length)]) {
//         console.log(`${array[firstHalf.length - 1]}`);
//     } else { 
//         console.log(`${array[firstHalf.length]}, ${secondHalf[0]}`);
//         console.log(`this is wild: ${secondHalf[0]}`);
//     }
// }

// console.log(half);
// console.log(`firstHalf: ${firstHalf.length}`);
// console.log(`secondHalf: ${secondHalf.length}`);

// getMiddle(arr1);

letrandomString = document.getElementById("textBox");
const goButton = document.getElementById("go-btn");
const parentDiv = document.getElementById("resultDiv");
const renderPhrase = document.createElement('p');

//randomString = "AAAAAAABBBBBB";
let half = randomString.length/2;

//console.log(half);

function getMiddleOfString(string) {
    let randomString = document.getElementById("textBox");
    let half = randomString.length/2;
    if (randomString.length % 2 === 0) {
        // renderPhrase.innerText = '';
        // renderPhrase.innerText = `${string.substring(half -1, half)},${string.substring(half, half + 1)}`;
        // parentDiv.append(renderPhrase);
        console.log(`${string.substring(half -1, half)}`);
        console.log(`${string.substring(half, half + 1)}`);
    } else {
        console.log(`${string.substring(half, half + 1)}`);
        // renderPhrase.innerText = '';
        // renderPhrase.innerText = `${string.substring(half, half + 1)}`;
        // parentDiv.append(renderPhrase);
    }
}

goButton.addEventListener('click', function() {
    return getMiddleOfString(randomString);
})
