var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");
var price = document.getElementById("price");

smallImg[0].onclick = function function1(){
    mainImg.src = smallImg[0].src;
    price.innerHTML = "80.00$";
}
smallImg[1].onclick = function function2(){
    mainImg.src = smallImg[1].src;
    price.innerHTML = "78.00$";
}
smallImg[2].onclick = function function3(){
    mainImg.src = smallImg[2].src;
    price.innerHTML = "85.00$";
}
smallImg[3].onclick = function function4(){
    mainImg.src = smallImg[3].src;
    price.innerHTML = "60.00$";
}