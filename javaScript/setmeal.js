const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

let cart = JSON.parse(localStorage.getItem("data")) || [];
menuItemsData = JSON.parse(localStorage.getItem("setData")) || menuItemsData;

var selectedItem, nameItem ;

let radioBtnsDrink = document.querySelectorAll
("input[name='drink']");

let radioBtnsSideDish = document.querySelectorAll
("input[name='side-dish']");

// open onlick
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = document.querySelector(button.dataset.modalTarget)
        openModal(modal2)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = button.closest('.modal')
        closeModal(modal2)
    })
})

function openModal(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay.classList.remove('active')
}

var form = document.getElementById('form')

let getSetMeal = (id, value,name) => {
    selectedItem = id;
    nameItem = value;
    image = name;
    console.log(selectedItem)
    console.log(nameItem)
}

let findSelectedDrink = () => {
    let selectedDrink = document.querySelector
    ("input[name='drink']:checked").value;
}

let findSelectedSideDish = () => {
    let selectedSideDish = document.querySelector
    ("input[name='side-dish']:checked").value;
}

radioBtnsDrink.forEach(radioBtnsDrink => {
        radioBtnsDrink.addEventListener("change",findSelectedDrink);
    });

radioBtnsSideDish.forEach(radioBtnsSideDish => {
        radioBtnsSideDish.addEventListener("change",findSelectedSideDish);
    });

let calculation =()=> {
    let cartIcon = document.getElementById("total");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x+y, 0);
};

let update = (id) => {
    let search = cart.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

form.addEventListener('submit', function(event){
    event.preventDefault()
    var amount = parseInt(document.getElementById('item').value)
    if (amount>0) {
        var selectedSideDish = document.querySelector
        ("input[name='side-dish']:checked").value;
        var selectedDrink = document.querySelector
        ("input[name='drink']:checked").value;
        cart.push({
            id: selectedItem,
            item: amount,
            sideDish: selectedSideDish,
            drink: selectedDrink,
            price: 20,
            img: image,
            name: nameItem,
            meal:"set"
        });
        menuItemsData.push({
            id: selectedItem,
            item: amount,
            sideDish: selectedSideDish,
            drink: selectedDrink,
            price: 20,
            img: image,
            name: nameItem,
            meal:"set"
        })
        alert("Added to the cart! ");
        update(selectedItem);
        localStorage.setItem("data", JSON.stringify(cart));
        localStorage.setItem("setData", JSON.stringify(menuItemsData));
        calculation();
        console.log(menuItemsData);
        location.reload();
    } else {
        alert('amount cannot be 0');
        return;
    }
    
})
calculation();
