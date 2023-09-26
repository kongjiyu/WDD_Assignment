let label = document.getElementById("label");
let ShoppingCart = document.getElementById("cart-page");
let title = document.getElementById("title");

let cart = JSON.parse(localStorage.getItem("data")) || [];
menuItemsData = JSON.parse(localStorage.getItem("setData")) || [];

console.log(cart);

let calculation =()=> {
    let cartIcon = document.getElementById("total");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x+y, 0);
};

calculation();

let menu = () => {
    return (title.innerHTML = `<p id="cart-title">Cart Items</p>`).join("");
};

let generateCartItems = () => {
    if(cart.length !==0) {
        return (ShoppingCart.innerHTML = cart
            .map((x) => {
                console.log(x);
                let { id, item } = x;
                let search = menuItemsData.find((y)=>y.id === id) || [];
                let {img, name, price, sideDish, drink} = search
                if (sideDish===undefined) {
                    return `
                    <div class="cart-item" >
                        <img src=${img} id="cart-img" alt="" />
                        <div class="details">
                            <div class="title-price-x">
                                <h4 class="title-price">
                                    <p class="cart-item-name">${name}</p>
                                    <p class="cart-item-price">RM${price}</p>
                                </h4>
                                <div onclick="removeItem(${id})" class="delete">
                                <svg  width="20" height="20" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" id="mainIconPathAttribute"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path> </svg>
                                </div>
                            </div>
                            <div class="cart-buttons">
                                <button onclick="decrement(${id})" class="decrease-item">-</button>
                                <span id=${id}>${item}</span>
                                <button onclick="increment(${id})" class="increase-item">+</button>
                            </div>

                            <h3 class="item-total-price">RM${item * search.price}</h3>
                        </div>    
                    </div>
                `
                }
                return `
                    <div class="cart-item" >
                        <img src=${img} id="cart-img-set" alt="" />
                        <div class="details">
                            <div class="title-price-x">
                                <h4 class="title-price">
                                    <ul class="cart-item-name-set">
                                        ${name}
                                        <li>${sideDish}</li>
                                        <li>${drink}</li>
                                    </ul>
                                    <p class="cart-item-price-set">RM${price}</p>
                                </h4>
                                <div onclick="removeItem(${id})" class="delete">
                                <svg  width="20" height="20" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" id="mainIconPathAttribute"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path> </svg>
                                </div>
                            </div>
                            <div class="cart-buttons-set">
                                <button onclick="decrement(${id})" class="decrease-item">-</button>
                                <span id=${id}>${item}</span>
                                <button onclick="increment(${id})" class="increase-item">+</button>
                            </div>

                            <h3 class="item-total-price-set">RM${item * search.price}</h3>
                        </div>    
                    </div>
                `
        }).join(""))
    } else {
        ShoppingCart.innerHTML =  ``;
        document.getElementById("checkout-page").innerHTML=``;
        label.innerHTML = `
        <div class="empty">
            <h2 class="cart-empty">Cart is Empty</h2>
            <a href="home.html">
                <button class="HomeBtn">Back to Home</button>
            </a>
        </div>
        `;
        localStorage.setItem("setData", JSON.stringify(menuItemsData));
    }
};

generateCartItems();

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
    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(cart));
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
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(cart));
}

let update = (id) => {
    let search = cart.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    cart = cart.filter((x) => x.id !== selectedItem.id);
    generateCartItems();

    localStorage.setItem("data", JSON.stringify(cart));
    calculation();
    TotalAmount();
};

let clearCart = () => {
    cart=[];
    menuItemsData=OrimenuItemsData;
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(cart));
    localStorage.setItem("setData", JSON.stringify(menuItemsData));
    calculation();
}

let TotalAmount = () => {
    if (cart.length !==0) {
        let amount = cart.map((x)=> {
            let { item, id } = x;
            let search = menuItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=> x + y, 0);
        

        document.getElementById("checkout-page").innerHTML = `
        <div class="checkout-page">
        <h2>Total Bill : RM ${amount}</h2>
        <button class="checkout" onclick="window.location.href='checkout.html';">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        </div>
        `;
    } else return;
}

TotalAmount();
