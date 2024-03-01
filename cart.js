///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total,curr) => total+curr.price,0)
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal*(1+tax))-couponValue


console.log(calcFinalPrice(summedPrice,10,0.07));
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    const customer = {
        name : "its easier to reference/find a customers order by their name. This will be a string",
        phoneNumber : "To contact the customer if needed. This will be a string",
        email : "we will need email of a cutomer to send him order status/recipt/to contact. This will be a string.",
        address : "we would need an address of a customer if we are going to deliver. Address will be a string",
        orderItems : "All the items that customer ordered. This will be an array of items."
    }
*/
/*
    Now, create a customer object following your own
    guidelines.
*/
//CODE HERE
const customer = {
    name : "James Bond",
    phoneNumber : "123-456-7890",
    email : "jamesbond@gmail.com",
    address : "007 Main St, Austin",
    orderItems : ['pizza','pasta']
}

