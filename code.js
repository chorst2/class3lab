$(document).ready(
    function ()
    {
        $("#libraryCalc").click(calcFees);
        $("#pizzaCalc").click(pizzaCostSplitter);


        function calcFees()
        {
            var lateFeeBooks = 0.25;
            var lateFeeDVDS = 0.50;
            var numBooks = $("#numBooks").val();
            numBooks = parseFloat(numBooks);
            var numDVDS = $("#numDVDS").val();
            numDVDS = parseFloat(numDVDS);
            var bookCost = numBooks * lateFeeBooks;
            var dvdCost = numDVDS * lateFeeDVDS;
            var totalCharges = bookCost + dvdCost;
            $("#displayCharges").text(totalCharges.toFixed(2));
            $(".output").show();
        }

        function pizzaCostSplitter()
        {
            var cheesePizzaCost = 15.00;
            var toppingCost = 1.25;
            var numToppings = $("#numToppings").val();
            numToppings = parseFloat(numToppings);
            var numPeople = $("#numPeople").val();
            numPeople = parseFloat(numPeople);
            var totalToppingCost = numToppings * toppingCost;
            var totalPizzaCost = totalToppingCost + cheesePizzaCost;
            var costPerPerson = totalPizzaCost / numPeople;
            $("#eachPersonCost").text(costPerPerson.toFixed(2));
            $(".outputPizza").show();
        }
    }
);