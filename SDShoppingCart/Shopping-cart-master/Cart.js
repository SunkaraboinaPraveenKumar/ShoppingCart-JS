// import {shopItemsData} from './Data';
let basket = JSON.parse(localStorage.getItem("Praveen")) || [];
let label = document.getElementById("label");
let shoppingcart = document.getElementById("shopping-cart");

let calculation = () => {
    //console.log("calculation function is Running");
    let cartIcon = document.getElementById("cartAmount");
    if (basket.length !== 0)
        cartIcon.innerHTML = (basket.map((x) => x.item).reduce((prev, next) => (prev + next)));
    else{
        cartIcon.innerHTML = 0;
    }
};
calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        // console.log("Basket is not Empty");
        return (shoppingcart.innerHTML = basket.map((x) => {
            // console.log(x);
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let {img,name,price}=search;
            return `
            <div class="cart-item">
                <img  width="100px" src=${img} alt="img">
                <div class="details">
                <div class="title-price-x">
                    <h4 class="title-price">
                        <p>${name}</p>
                        <p class="cart-item-price">$ ${price}</p>
                    </h4>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
                <div class="buttons">
                   <i  onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div  id="${id}" class="quantity">${item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3>$ ${item*search.price}</h3>
                </div>
            </div>
            `
        }).join(""));
        
    }
    else {
        shoppingcart.innerHTML = ``;
        label.innerHTML =
            `<h2>Cart is Empty</h2>
        <a href="shopping.html">
        <button class="home-btn">Back To Home</button>
        </a>`;
    }
};
generateCartItems();

let increment=(id)=>{
    let selectedItem=id;
    let search = basket.find((x)=>x.id===selectedItem.id);
    if(search==undefined){
        basket.push({
        id:selectedItem.id,
        item:1,
        });
    }
    else{
        search.item+=1;
    }
    //console.log(basket);
    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("Praveen",JSON.stringify(basket));
}
let decrement=(id)=>{
    let selectedItem=id;
    let search = basket.find((x)=>x.id===selectedItem.id);
    if(search===undefined) return;
    else if(search.item==0) return;
    else{
        search.item-=1;
    }
    localStorage.setItem("Praveen",JSON.stringify(basket));
    update(selectedItem.id);
    basket=basket.filter((x)=>x.item!==0);
    generateCartItems();
    //console.log(basket);
    localStorage.setItem("Praveen",JSON.stringify(basket));
};
let update=(id)=>{
    let search =basket.find((x)=>x.id===id);
    // console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calculation();
    totalAmount();
};

let removeItem=(id)=>{
    let selectedItem=id;
    basket=basket.filter((x)=>x.id!==selectedItem.id);
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem("Praveen",JSON.stringify(basket));
}

let totalAmount = ()=>{
    if(basket.length!==0){
        let amount=basket.map((x)=>{
            let {item,id}=x;
            let search = shopItemsData.find((y)=>y.id===id)|| [];
            return item * search.price;
        }).reduce((x,y)=>(x+y));
        label.innerHTML=
        `<h2>Total Bill: $ ${amount}</h2>
        <a href="checkout.html">
          <button class="checkout">Checkout</button>
        </a>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>`
    }
    else{
        return;
    }
};

totalAmount();

let clearCart=()=>{
    basket=[];
    generateCartItems();
    localStorage.setItem("Praveen",JSON.stringify(basket));
    calculation();
}
function getTotalCartAmount() {
    if (basket.length !== 0) {
        const totalAmount = basket
            .map((x) => {
                const { item, id } = x;
                const product = shopItemsData.find((y) => y.id === id) || {}; // Find product details
                return item * (product.price || 0); // Calculate item total
            })
            .reduce((sum, amount) => sum + amount, 0); // Sum all item totals
        return totalAmount;
    }
    return 0;
}

  