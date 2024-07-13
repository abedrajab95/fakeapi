const getProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    const result = data
      .map((product) => {
        return `
              <div class="product">
              <h2>${product.title}</h2>
              <img src='${product.image}'/>
              <a href='details.html?id=${product.id}'>Details</a>
              </div>
          `;
      })
      .join("");
    document.querySelector(".products").innerHTML = result;
  };
  getProducts();


