//create a way to convert a string to an array


// separate each letter of the string into it's own element within the array
//we'll get to these first two in a bit**

arr1 = [6, 7, 8,  9, 4, 6, 7];

// split the array in half
const half = Math.ceil(arr1.length/2);

firstHalf = arr1.slice(0, half);
//let arrFirstHalf = [];
secondHalf = arr1.slice (-half);


// compare the two halves.  If one is larger, return the element at the last index in the array.  
//If both are the same size, return the element at the last index in the array in section 1, and 
//the first element at the 0 index of the second half.

function getMiddle() {
    
    if (firstHalf.length > secondHalf.length) {
        console.log(`${arr1[firstHalf.length]}`);
    } else { 
        console.log(`${arr1[firstHalf.length]}, ${secondHalf[0]}`);
    }
    
}

getMiddle(arr1);
