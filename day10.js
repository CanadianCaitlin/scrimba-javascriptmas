// Completed solution here: https://scrimba.com/scrim/co75f411e874f9814ff9aca7f

// Prompt: 

// Given an array of integers, find the pair of adjacent elements that has the largest
// product and return that product.

// Example:

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21
// 7 and 3 product the largest product

function adjacentElementsProduct(nums) {
    let productArray = [] // a list of products
    for (let i = 0; i < nums.length-1; i++) { // loop through the argument list
        let product = 0
        product += nums[i]*nums[i+1] // multiply the number by the next number in the argument list
        productArray.push(product) // add product to the list of products
    }
    sortedArray = productArray.sort() // sort the list of products and return the last (largest) number
    return sortedArray[sortedArray.length-1]
}