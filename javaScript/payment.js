let card = document.getElementById("card");
let transfer = document.getElementById("transfer");

let TotalAmount = () => {
    if (cart.length !==0) {
        let amount = cart.map((x)=> {
            let { item, id } = x;
            let search = menuItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=> x + y, 0);
        

        document.getElementById("checkout-total").innerHTML = `
        <h2>Total Bill : RM ${amount}</h2>`
    } else return;
}

TotalAmount();

let paymentForm = (id) => {
    if (document.getElementById('option-1').checked) {
        transfer.innerHTML = ``
        return (card.innerHTML = `
            
            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>Name On Card<span>*</span></label>
            </div>

            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>Credit Card number<span>*</span></label>
            </div>

            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>Exp Month<span>*</span></label>
            </div>

            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>MONTH/YEAR<span>*</span></label>
            </div>

            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>CVV<span>*</span></label>
            </div>

            

            
        `
        
            )

    } else {
        card.innerHTML = ``
        return (
            transfer.innerHTML = `
            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>Name On Account<span>*</span></label>
            </div>

            <div class="input-detail">
                <input type="text" placeholder="" required/>
                <label>Account Number<span>*</span></label>
            </div>
            `
        )
    }
}

paymentForm();
