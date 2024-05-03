// Question 3: Why does the counter start at NaN?

let count = parseInt(document.getElementById('counter-value').innerText);
//The inner text is an empty string. If you give a starting value for counter it would work
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
incrementButton.addEventListener('click', function() {
    //Before updating the code it changes the value of count to NaN
    //After updating the code will add 1 to the current count and update the innerText to change it to current count.
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
decrementButton.addEventListener('click', function() {
    count--;
    //The element ID needs to be updated from count-value to counter-value
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
// This is because above we are using parseInt to check the value of a string so we need to set the value as a string
resetButton.addEventListener('click', function() {
    count = '0';
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
//You can use the watch tool and add breakpoints before each place that the count is changed
// Question 8: What is the scope of the count variable in DevTools?
// The scope of the count is Script

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// The app.js in the network tab has a status code of 200 which is a successful load.
// Question 10: Use the Console to track errors. Are there any errors being thrown?
//There are no errors until the decrement is called in which there is a type error because we need to update the id to counter-value.
