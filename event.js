let food1={
    name:"pizza",
    price:37000,
    totalPrice:0
}
$(".plusmark").on("click",function(){
   let unitprice= $(this).parent().parent().prev().children(".food-price-text").text()
   let totalPrice=$(this).parent().parent().parent().next().children(".foods-totalprice-text")
   let totalpriceNumber=parseInt(totalPrice.text())
   let number=$(this).parent().prev()
   let numberInt=parseInt(number.text())
   number.text(numberInt+1)
   totalPrice.text(+unitprice +totalpriceNumber)

})
$(".minusmark").on("click",function(){
    let unitprice= $(this).parent().parent().prev().children(".food-price-text").text()
    let totalPrice=$(this).parent().parent().parent().next().children(".foods-totalprice-text")
    let totalpriceNumber=parseInt(totalPrice.text())
    let number=$(this).parent().prev()
    let numberInt=parseInt(number.text())
    if(numberInt!=0)
    {
    number.text(numberInt-1)
    totalPrice.text(totalpriceNumber-(+unitprice))
    }

 })