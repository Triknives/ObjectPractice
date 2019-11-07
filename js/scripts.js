//Function HotDog
function Hotdog(type, topping, bun) {
  this.type = type;
  this.topping = topping;
  this.bun = bun;
  this.price = 0;
}

//Logic
Hotdog.prototype.getPrice = function() {
  this.topping.forEach(function(topping){
    this.price += 1;

  if(this.type === beef){
    this.price += 3;
  }
  else if(this.type === polish){
    this.price += 4;
  }
  else if(this.bun === wheat) {
    this.price += 1;
  }
  else if(this.bun === parmgarlic){
    this.price += 2;
  }
  return this.price;
})
};

//User Interface Logic
$(document).ready(function(){
  $("#toppings").submit(function(event){
    event.preventDefault();
    //Input variables defined for output
    let toppingInput = $("#userChoices:checked");
    let toppingArray = [];
    let typeInput = $("#type").val();
    let bunInput = $("#bun").val();
console.log(toppingInput);
console.log(toppingArray);
    //Function to determine price output from inputs
      toppingInput.forEach(function(toppingInput){
      toppingArray.push(toppingInput.val());
      let myHotdog = new Hotdog (typeInput, toppingArray, bunInput);
      let price = myHotog.getPrice();
console.log(toppingInput);
      //User input displayed back to User
      $("#userOrder").text(myHotdog)

    });
  });
});
