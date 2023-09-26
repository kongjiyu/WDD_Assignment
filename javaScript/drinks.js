let drink = document.getElementById("drink-menu");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let generateDrinkshMenu =() =>{
    return (drink.innerHTML = drinksItemsData
        .map((x)=>{
            let { id, name, price, desc, img } = x;
            let search = cart.find((x)=> x.id === id) || []
        return `
        <div class="single-menu">
            <img src=${img} alt="${id}" class="drink-image">
            <div class="menu-content">
                <h4>${name}<span>RM${price}</span></h4>
                <p>${desc}</p>
                    <button class="buttonmain" onclick="increment(${id})" class="addToCart">Add To Cart</button>
                    <div style="visibility:hidden;" id=${id}>${search.item === undefined? 0: search.item}</div>
            </div>
        </div>
        `;
    }).join(""));
};

generateDrinkshMenu();

let increment = (id) => {
    let selectedItem = id;
    let search = cart.find((x)=> x.id=== selectedItem.id);

    if(search === undefined) {
        cart.push({
            id: selectedItem.id,
            item: 1,
            
        }
        );
    }
    else{
        search.item +=1;
    };
    
    alert("Added to the cart! ");

    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(cart));
    calculation();
};

let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((x)=> x.id=== selectedItem.id);

    if(search===undefined) return;
    if(search === 0) return;
    else{
        search.item -=1;
    };
    
    update(selectedItem.id);
    cart = cart.filter ((x) => x.item !==0);
    localStorage.setItem("data", JSON.stringify(cart));
}
let update = (id) => {
    let search = cart.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=> {
    let cartIcon = document.getElementById("total");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x+y, 0);
};

calculation();
