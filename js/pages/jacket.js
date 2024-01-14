export async function jacketPage() {}
const url = document.location; 

const search =url.search;

const parameter = new URLSearchParams(search); 

async function fetchJacket(id) {
    if (!id) throw new Error('Unable to load product. Please try again later.')
    const url = `https://www.rainy-days-cms.com/wp-json/wc/store/products/${id}`; 
    try {
        const response = await fetch(url);
         if (response.ok) {
            const data = await response.json();

            return data;
         }  else {
            throw new Error('Unable to connect to network'); 
         }
    }   catch (error) {
       
    }
}

async function renderJacket() {
    const id = parameter.get('id');
    const jacketData = await fetchJacket(id);
    const singleJacketContent = document.getElementById("single-jacket-content");
    singleJacketContent.innerHTML = `
                                        <div><img src=${jacketData.images[0].src}></img></div>
                                        <div><h1>${jacketData.name}</h1>
                                        <h1>${jacketData.prices.price/100}$</h1>
                                        <h3>Colour: ${jacketData.attributes[1].terms[0].name}</h3>
                                        <p>${jacketData.description}</p>
                                        <a href="cart.html">
                                        <button class="button-jacket-page">Add to cart</buttton>
                                        </a></div>
                                    `
}


renderJacket();
