export async function jacketPage() {}
const url = document.location; 

const search =url.search;

const parameter = new URLSearchParams(search); 

async function fetchJacket(id) {
    if (!id) throw new Error('Unable to load product. Please try again later.')
    const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`; 
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
                                        <div><img src=${jacketData.image}></img></div>
                                        <div><h1>${jacketData.title}</h1>
                                        <h1>${jacketData.price}$</h1>
                                        <h3>Colour: ${jacketData.baseColor}</h3>
                                        <p>${jacketData.description}</p>
                                        <select name="size" class="select-size-jacket-page">${jacketData.sizes}
                                        <option>Select size:</option>
                                        <option>${jacketData.sizes[0]}</option>
                                        <option>${jacketData.sizes[1]}</option>
                                        <option>${jacketData.sizes[2]}</option>
                                        <option>${jacketData.sizes[3]}</option>
                                        <option>${jacketData.sizes[4]}</option>
                                        <option>${jacketData.sizes[5]}</option>
                                        </select>
                                        <a href="cart.html">
                                        <button class="button-jacket-page">Add to cart</buttton>
                                        </a></div>
                                    `
}


renderJacket();
