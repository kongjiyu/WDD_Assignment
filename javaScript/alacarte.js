let menu = document.getElementById("menu");

let menuItemsData = [{
    id:"prawnmee",
    name:"PRAWN MEE",
    price:"RM10.00",
    desc:"It primarily consists of rice </br>vermicelli and thicker yellow egg noodles, while the broth is made with prawn heads and shells, </br>and pork ribs.Sliced prawns or shrimps are also added into the dish, along with pork slices, hard </br>boiled eggs, and kangkung .",
    img:"../image/newPrawnmee.jpg"
},
{
    id:"wantanmee",
    name:"WANTAN MEE",
    price:"RM10.00",
    desc:"The dish usually consists of egg noodles served in a hot broth, garnished with leafy vegetables and wonton dumplings. The types of leafy vegetables used are usually gai-lan, also known as Chinese broccoli or Chinese kale. Another type of dumpling known as shui jiao (水餃) is sometimes served in place of wonton. ",
    img:"../image/Newwantanmee.jpg"
},
{
    id:"porknoodle",
    name:"PORK NOODLE",
    price:"RM10.00",
    desc:"It mainly uses kway teow, fish balls and fish cakes as the main ingredients. Adding the soup made with pork bones gives him a delicious and sweet soup base.",
    img:"../image/Newporknoodle.jpg"
},
{
    id:"charkwayteow",
    name:"CHAR KWEY TEOW",
    price:"RM10.00",
    desc:"It is made from flat rice noodles or kway teow of approximately 1 cm or about 0.5 cm in width, stir-fried over very high heat with garlic, light and dark soy sauce, chilli paste, whole prawns, shelled blood cockles, chopped Chinese chives, slices of Chinese sausage, and bean sprouts.",
    img:"../image/Newcharkwayteow.jpg"
}]

let cart = JSON.parse(localStorage.getItem("data")) || [];

let generateMenu =() =>{
    return (menu.innerHTML = menuItemsData
        .map((x)=>{
            let { id, name, price, desc, img } = x;
            let search = cart.find((x)=> x.id === id) || []
        return `
        <div class="single-menu">
            <img src=${img} alt="prawnmee">
            <div class="menu-content">
                <h4>${name}<span>RM${price}</span></h4>
                <p>${desc}</p>
                    <button  onclick="increment(${id})" class="addToCart">Add To Cart</button>
                    <div id=${id}>${search.item === undefined? 0: search.item}</div>
            </div>
        </div>
        `;
    }).join(""));
};

generateMenu();

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
