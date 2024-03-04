//Task 1: Create an array.
var input_array = [12, 7, 3, 7, 5, 12, 8, 3, 9, 8, 10, 5];

//Task 2: Find and display the unique items from the array in the console.
//Task 3: Calculate and display the total count of unique items.
var uniqueItems = [];
var count = {};
input_array.forEach(item => 
    {
    count[item] = (count[item] || 0) + 1;
});
for (var c in count) {
    if (count[c] === 1) {
        uniqueItems.push(c);
    }
}
console.log("Unique Items: ["+ uniqueItems + "]");
console.log("Number of Unique Items: "+ c.length);

//Task 4: Determine the length of the array.
console.log("Length of the array: "+ input_array.length);

//Task 5: Identify and display non-unique items in the console.
var nonuniqueItems=[];
var count2 = {};
input_array.forEach(item => 
    {
    count2[item] = (count2[item] || 0) + 1;
});
for (var c2 in count2) {
    if (count2[c2] >=2) {
        nonuniqueItems.push(c2);
    }
}
console.log("Non-Unique Items: ["+ nonuniqueItems + "]");

//Task 6: Sort the array and display it on the screen with each item on a separate line.
//input_array.sort().forEach(item => console.log(item));
var sort = input_array.sort((x, y) => x - y);
console.log("Sorted Array:");
sort.forEach(item => console.log(item));

//Task 7: Find and display the greatest and smallest values in the array.
console.log("Largest value from array: "+ Math.max(...input_array));
console.log("Smallest value from array: "+ Math.min(...input_array));

//Task 8: Find any consecutive repeating value and display them.
console.log("Repeating values: ");
for (let i = 0; i <= input_array.length; i++) {
    if (input_array[i] == input_array[i + 1]) {
        console.log(input_array[i]);
    }
}

//Sample