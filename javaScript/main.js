let cart = JSON.parse(localStorage.getItem("data")) || [];
menuItemsData = JSON.parse(localStorage.getItem("setData")) || [];

let calculation =()=> {
    let cartIcon = document.getElementById("total");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x+y, 0);
};

calculation();
