const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

  const getTotalAmountForProducts = (products) => {
      let totalPrice = 0;
      products.forEach(p => totalPrice += p.price);
      console.log(totalPrice);
      return totalPrice;
 }

 const totalPrice1 = getTotalAmountForProducts(products)

//Test2 
const priceReducer = (total, product) => total + product.price;
const totalPrice2 = products.reduce(priceReducer, 0);

//Test3
const prices = products.map(product => product.price)
const priceReducer2 = (total, price) => total + price
const totalPrice3 =prices.reduce(priceReducer2, 0)


