$(document).ready(function(){
  

    function flavor() {
      var pizzaFlavor = document.getElementById("flavor").value;
      return parseInt(pizzaFlavor);
    }
    function size() {
      var pizzaSize = document.getElementById("size").value;
      return parseInt(pizzaSize);
    }
    function crust() {
      var pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    }
    function topping() {
      var pizzaTopping = document.getElementById("topping").value;
      return parseInt(pizzaTopping);
    }
    function number() {
      var numberOfPizzas = document.getElementById("number").value;
      return parseInt(numberOfPizzas);
    }

    function Order(flavor, size, crust, topping, number) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newNumber = number;
    }
    var userInput = new Order(flavor(), size(), crust(), topping(), number());

    var totalCost =
      (userInput.newSize +
        userInput.newCrust +
        userInput.newTopping +
        userInput.newFlavor +
      userInput.newNumber);

      alert("Your charges for Pizza" + totalCost);
      alert("Your pizza will be delivered to you in an instant");  

   $("#formgroup").submit(function(execute) {
       execute.preventDefault();
 
         });
  });
