$(document).ready(function(){
  

    function flavor() {
      let selectFlavor = document.getElementById("flavor").value;
      return parseInt(selectFlavor);
    }
    function size() {
      let selectSize = document.getElementById("size").value;
      return parseInt(selectSize);
    }
    function crust() {
      let selectCrust = document.getElementById("crust").value;
      return parseInt(selectCrust);
    }
    function topping() {
      let selectTopping = document.getElementById("topping").value;
      return parseInt(selectTopping);
    }
    function number() {
      let inputNumber = document.getElementById("number").value;
      return parseInt(inputNumber);
    }

    function order(flavor, size, crust, topping, number) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newNumber = number;
    }

    let userInput = new order(flavor(),size(),crust(),topping(),number()); 

    let totalCost = (userInput.newFlavor + userInput.newSize + userInput.newCrust + userInput.newTopping) *userInput.newNumber;
      alert("Your charges for pizza is " + + totalCost)
      alert("Your pizza will be delivered to you in an instant and thank you for choosing us");

  $("#formgroup").submit(function(execute) {
    execute.preventDefault();

});
});