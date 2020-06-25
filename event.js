let food1 = {
  name: "pizza",
  price: 37000,
  totalPrice: 0,
};
$(".plusmark").on("click", function () {
  let unitprice = $(this)
    .parent()
    .parent()
    .prev()
    .children(".food-price-text")
    .text();
  let totalPrice = $(this)
    .parent()
    .parent()
    .parent()
    .next()
    .children(".foods-totalprice-text");
  let totalpriceNumber = parseInt(totalPrice.text());
  let number = $(this).parent().prev();
  let numberInt = parseInt(number.text());
  number.text(numberInt + 1);
  totalPrice.text(+unitprice + totalpriceNumber);
  calAllTotalPricePlus(unitprice);
  calcpayable();
});
$(".minusmark").on("click", function () {
  let unitprice = $(this)
    .parent()
    .parent()
    .prev()
    .children(".food-price-text")
    .text();
  let totalPrice = $(this)
    .parent()
    .parent()
    .parent()
    .next()
    .children(".foods-totalprice-text");
  let totalpriceNumber = parseInt(totalPrice.text());
  let number = $(this).parent().prev();
  let numberInt = parseInt(number.text());
  if (numberInt != 0) {
    number.text(numberInt - 1);
    totalPrice.text(totalpriceNumber - +unitprice);
    calAllTotalPriceMinus(unitprice);
    calcpayable();
  }
});
function calAllTotalPricePlus(value) {
  $(".sumTotalPrices-number").text(
    +value + parseInt($(".sumTotalPrices-number").text())
  );
  $(".servisCharge-number").text(
    parseInt($(".sumTotalPrices-number").text()) * 0.09
  );
}
function calAllTotalPriceMinus(value) {
  $(".sumTotalPrices-number").text(
    parseInt($(".sumTotalPrices-number").text()) - +value
  );
  $(".servisCharge-number").text(
    parseInt($(".sumTotalPrices-number").text()) * 0.09
  );
}
let m = "empty";
let n = true;
$(".discountCode-button").on("click", function () {
  if (m == "empty") {
    for (key in discountCodes) {
      if ($(".discountCode-input").val() == key) {
        $(".discount-number").text(discountCodes[key]);
        $(".discountCode-input").addClass("correctCode");
        $(".discountCode-button").html('<i class="fas fa-trash"></i>');
        $(".discountCode-button").addClass("correctCodebtn");
        $('.discountCode-input').prop('readonly', true);
        m = "correct";
        calcpayable();
      }

      if (m != "correct") m = "wrong";
    }
  } else if (m == "correct") {
    $(".discount-number").text("0");
    $(".discountCode-input").removeClass("correctCode");
    $(".discountCode-button").html('<i class="fas fa-plus "></i>');
    $(".discountCode-button").removeClass("correctCodebtn");
    $(".discountCode-input").val("");
    $('.discountCode-input').prop('readonly', false);
    m = "empty";
    calcpayable();
  }

  if (m == "wrong") {
    $(".discountCode-input").addClass("wrongtCode");
    m = "empty";
    $('.discountCode-input').prop('readonly', false);
    n = false;
  }
});
$(".discountCode-input").on("keydown", function () {
  if (!n) {
    $(".discountCode-input").removeClass("wrongtCode");
    n = true;
  }
});
const discountCodes = {
  first: 20000,
  second: 30000,
  third: 40000,
};
function calcpayable() {
  $(".payablePrice-number").text(
    +$(".sumTotalPrices-number").text() +
      +$(".servisCharge-number").text() -
      +$(".discount-number").text()
  );
}
