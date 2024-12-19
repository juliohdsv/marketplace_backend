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
      })
      resolve();
    })
  }

  update(){

  }

  delete(){

  }
}


export default new ProductsRepository;
