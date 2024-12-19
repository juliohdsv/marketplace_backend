import { v4 as uuid } from "uuid";

import products from "../../mocks/products.js";


class ProductsRepository{

  findAll(){

    return new Promise((resolve)=>{
      resolve(products);
    });
  }

  findById(id){

    return new Promise((resolve)=>{
      const product = products.find((item)=> item.id === id);
      resolve(product);
    })
  }

  findByName(name){

    return new Promise((resolve)=>{
      const product = products.find((item)=> item.name === name);
      resolve(product);
    })
  }

  create(name, price){

    return new Promise((resolve)=>{
      products.push({
        id: uuid(),
        name,
        price
      });

      resolve();
    })
  }

  update(id, name, price){

    return new Promise((resolve) => {
      const updatedProduct = {name, price};

      products.map((item) => (
        item.id === id ? updatedProduct : products
      ));

      resolve(updatedProduct);
    })
  }

  delete(id){

    return new Promise((resolve)=>{
      const removeProduct = products.filter(item => item.id !== id);
      resolve(removeProduct);
    });
  }
}


export default new ProductsRepository;
