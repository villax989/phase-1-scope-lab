// Write your solution in this file!
// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to return the customerName
function returnsCustomerName() {
    return customerName;
}


// Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


// Declare leastFavoriteCustomer
const leastFavoriteCustomer = 'not bob';

// Function to unsuccessfully try to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'still not bob';
}
