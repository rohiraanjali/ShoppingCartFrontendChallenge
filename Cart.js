var cart = [];

const fetchData = () => {
    fetch("https://yellowriddle.netlify.app/products.json")
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        cart = data.products.map(product => {
            return {...product, qty: 1}
        })
        console.log(cart)
        for(let i=0; i<cart.length; i++) {
            let productImgInner = document.createElement("div");
            let productImg = document.createElement("div");
            let img = document.createElement("img");
            let productCartDetails = document.createElement("div");
            let productName = document.createElement("p");
            let productSeller = document.createElement("small");
            let fAssured= document.createElement("img");
            let productDetails= document.createElement("div");
            let finalPrice = document.createElement("p")
            let orignalPrice = document.createElement("p")
            let discount = document.createElement("p")
            let percentageOffer = document.createElement("p")
            let productCartDeliveryDetails = document.createElement("div");
            let deliveryDate = document.createElement("p");
            let productReplacement = document.createElement("small");
            let cartAction = document.createElement("div");
            let quantity = document.createElement("div");
            let quantityMinus= document.createElement("a");
            let quantityInput = document.createElement("input");
            let quantityPlus = document.createElement("a");
            let minus = document.createElement("span");
            let plus = document.createElement("span");
            let actionBtn = document.createElement("div");
            let saveforLater = document.createElement("button");
            let remove = document.createElement("button");
            let container = document.querySelector(".product-cart-1")
        }
//         const html = data.products.map(product => {
//             return `
//             <div class="product-img-inner">
//             <div class="product-img"> 
//             <img class="img" src="${product.img}" />
//             <div class="product-cart1-details">
//             <p class="product-name">${product.name}</p>
//             <small class="Product-seller">Seller:${product.seller}
//             <img class="fAssured-true" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
//             </small>

//             <div class="Product-details">
//             <p class="final-price">${product.finalPrice} ${product.currency}</p>   &nbsp;
//             <p class="original-price">${product.originalPrice} ${product.currency}</p>&nbsp;
//             <p class="discount-percentage">${product.discountPercentage}% OFF</p>&nbsp;
//             <p class="product-offer">${product.offers.count} Offers available</p>
//             <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3GN0Y0"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg>
//             </div>
//         </div>
//         <div class="product-cart1-delivery-details">
//             <p class="product-delivery-date">Delivery by ${product.delivery.estimatedDate} | Free <span class="strike-fee"> ₹${product.delivery.originalDeliveryCharge}</span></p>
//             <small class="product-replacement">${product.delivery.replacementPolicyDuration} Replacement Policy</small>
//             </div>
//             </div>
//             <div class="cart-action">

//             <div class="quantity">
//     <a href="#" onclick="updateQty()" id="quantity__minus"><span class="minus">-</span></a> &nbsp;
//     <input name="quantity" onclick="updateQty()" type="number" id="quantity__input" value="1"> &nbsp;
//     <a href="#" onclick="updateQty()" id="quantity__plus"><span class="plus">+</span></a> &nbsp;
//   </div>
//   <div class="action-btn">
//     <button  class="save-later">SAVE FOR LATER</button>
//     <button class="remove-btn">REMOVE<button>
//    </div>

//     </div> 

//     </div>
//             `    
    //     })
    //     .join("")
    //     console.log(html)
    //     document
    //     .querySelector(".product-cart-1")
    //     .insertAdjacentHTML("afterbegin", html)
    })
    .catch(error => {
        console.log(error)
    })
}

fetchData();
console.log(cart)


function updateQty () {
let decreaseQty = document.querySelector("#quantity__minus");
let increaseQty = document.querySelector("#quantity__plus");
let qtyInput = document.querySelector("#quantity__input");

increaseQty.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
})

decreaseQty.addEventListener('click', () => {
   if(qtyInput.value <= 0) {
       qtyInput.value = 1;
   } else {
    qtyInput.value = parseInt(qtyInput.value) - 1;
   }
})
}
