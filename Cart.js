const fetchData = () => {
    fetch("https://yellowriddle.netlify.app/products.json")
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data.products)
        const html = data.products .map(product => {
            return `
            <div class="product-img">
            <img class="img" src="${product.img}" />
            <div class="product-cart1-details">
            <p class="product-name">${product.name}</p>
            <small class="Product-seller">Seller:${product.seller}
            <img class="fAssured-true" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
            </small>

            <div class="Product-details">
            <p class="final-price">${product.finalPrice} ${product.currency}</p>   &nbsp;
            <p class="original-price">${product.originalPrice} ${product.currency}</p>&nbsp;
            <p class="discount-percentage">${product.discountPercentage}% OFF</p>&nbsp;
            <p class="product-offer">${product.offers.count} Offers available</p>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3GN0Y0"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg>
            </div>

            <div class="quantity">
            <a href="#" class="quantity__minus"><span>-</span></a> &nbsp;
            <input name="quantity" type="text" class="quantity__input" value="1"> &nbsp;
            <a href="#" class="quantity__plus"><span>+</span></a> &nbsp;

            <div class="cart-action">
            <p class="save-later">SAVE FOR LATER</p>
            <P class="remove-cart">REMOVE</P>
            </div>
          </div>

        </div>
        <div class="product-cart1-delivery-details">
            <p class="product-delivery-date">Delivery by ${product.delivery.estimatedDate} | Free <span class="strike-fee"> ₹${product.delivery.originalDeliveryCharge}</span></p>
            <small class="product-replacement">${product.delivery.replacementPolicyDuration} Replacement Policy</small>
            </div>
            
            </div>
            `
        })
        .join("")
        console.log(html)
        document
        .querySelector(".product-cart-1")
        .insertAdjacentHTML("afterbegin", html)
    })
    .catch(error => {
        console.log(error)
    })
}

fetchData();