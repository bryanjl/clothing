const popupFunc = (event) => {
    //toggles the show and hide popup product
    var popup = document.getElementById("product-popup");
    popup.classList.toggle("show");

    console.log(event.target.parentNode);
}