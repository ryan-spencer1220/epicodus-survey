$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        const name = $("name").val();
        $(".results").text(name);
        const address = $("address").val();
        $(".results").text(address);
        const phone-number = $("phone-number").val();
        $(".results").text(address);
    })
})