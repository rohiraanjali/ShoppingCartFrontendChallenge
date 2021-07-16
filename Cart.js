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
            <div class="product-img-outer">
            <img class="product-img" src="${product.img}" />
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