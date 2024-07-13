const getProducts = async()=>{

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const {data} = await axios.get (`https://fakestoreapi.com/products/${id}`)
    return data;

}

const displayProduct = async ()=>{
    const data = await getProducts();
    const result = `
    <h2>${data.title}</h2>
    <p>${data.price}</p>
    <img src='${data.image}' />
    
    `;

    document.querySelector(".product").innerHTML=result;
}

displayProduct();