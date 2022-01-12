$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $(".outputName").text(name);
    const address = $("#address").val();
    $(".outputAddress").text(address);
    const phoneNumber = $("#phone-number").val();
    $(".outputNumber").text(phoneNumber);
    const beverage = $("#beverage").val();
    $(".outputBeverage").text(beverage);
    const favoriteColor = $("#color").val();
    $(".outputColor").text(favoriteColor);
    const dateOfBirth = $("#born").val();
    $(".outputDOB").text(dateOfBirth);
    const favoriteAnimal = $("input:radio[name=animal]:checked").val();
    $(".outputAnimal").text(favoriteAnimal);
    $(".results").show();
  });
});
