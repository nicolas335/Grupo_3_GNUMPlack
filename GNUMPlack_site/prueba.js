let productsJson = require('./data/products.json');

let categories_products = ["Placa de yeso","Placa de yeso laminado","Placa de yeso con fibras","Placa de lana de madera","Placa de cemento"];

let conditionId = ["destacados","oferta","sin condicion"]

let ids = (param, array) => {
  let result  = array.findIndex(element => element === param )
  return result + 1
};

let Products = productsJson.map(product => {
    let element = {
      name: product.name,
      description: product.description,
      dimensions: product.dimensions,
      discount: product.discount,
      price: product.price,
      qualities: product.qualities.toString(),
      image: product.image[0],
      stock: product.stock,
      categories_products_id: ids(product.category,categories_products),
      conditions_id: ids(product.condition,conditionId),
      
    }
    return element
  });

  console.log(Products);