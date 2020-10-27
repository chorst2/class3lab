function lateFeeLibrary()
{
    //create variable for late fee books
    var lateFeeBooks = 0.25;

    //create variable for late fee dvds
    var lateFeeDVDS = 0.50;

    //ask them how many books they are returning
    var numBooks = prompt("How many books are you returning? ");

    //convert to number
    numBooks = parseFloat(numBooks);

    //ask them how many dvds they are returning
    var numDVDS = prompt("How many DVDS are you returning? ");

    //convert to number
    numDVDS = parseFloat(numDVDS);

    //multiply number of books returning by lateFeeBooks to get total cost for books
    var bookCost = numBooks * lateFeeBooks;

    //multiply number of dvds returning by lateFeeDVDS to get total cost for dvds
    var dvdCost = numDVDS * lateFeeDVDS;

    //add total cost for books and total cost for dvds to get total late fee charges
    var totalCharges = bookCost + dvdCost;

    //create variable to display late fee charges with 2 decimal places
    var displayTotalCharges = totalCharges.toFixed(2);

    //output the total late fee charges
    alert(`Your total charges are $${displayTotalCharges}`);
}
function pizzaCostSplitter()
{
    //create variable for cheese pizza cost
    var cheesePizzaCost = 15.00;

    //create variable for topping cost
    var toppingCost = 1.25;

    //ask them how many toppings they are adding to their cheese pizza
    var numToppings = prompt("How many toppings are you adding? ");

    //convert to number
    numToppings = parseFloat(numToppings);

    //ask them how many people are sharing the pizza
    var numPeople = prompt("How many people are sharing the pizza? ");

    //convert to number
    numPeople = parseFloat(numPeople);

    //multiply number of toppings by toppingCost to get total topping cost
    var totalToppingCost = numToppings * toppingCost;

    //add total topping cost to cheesepizzacost to get total pizza cost
    var totalPizzaCost = totalToppingCost + cheesePizzaCost;

    //create variable to display total pizza cost with just 2 decimal places
    var displayPizzaCost = totalPizzaCost.toFixed(2);

    //divide total pizza cost by total number of people to get cost per person
    var costPerPerson = totalPizzaCost / numPeople;

    //create variable to display cost per person with just 2 decimal places
    var displayCostPerPerson = costPerPerson.toFixed(2);

    //output the total pizza cost and cost per person
    alert(`Total pizza cost is $${displayPizzaCost} and cost per person is $${displayCostPerPerson}`);

}