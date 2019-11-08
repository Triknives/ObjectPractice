
function Hotdog(topping) {
  this.topping = topping;
  this.price = 0;
}

// Logic
Hotdog.prototype.getPrice = function() {
  this.topping.forEach(function(topping){
    this.price += 1;

    if(topping === "Beef"){
      this.price += 3;
    }
    else if(topping === "Polish"){
      this.price += 4;
    }
    return this.price;
  })
};

//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();

    let toppingInput = $("input:checkbox[name=toppings]:checked");
    let toppingArray = [];
    let typeInput = $("#type").val();
    let bunInput = $("#bun").val();

    toppingInput.each(function(){

      toppingArray.push($(this).val());
      console.log(toppingArray);
      return toppingArray;
    });
    let myHotdog = new Hotdog (toppingArray);
    let price = myHotdog.getPrice();

  });
});
