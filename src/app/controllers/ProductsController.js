
import ProductsRepository from "../repository/ProductsRepository.js";

class ProductsController{

  async index(request, response){

    const products = await ProductsRepository.findAll();
    response.status(200).json(products);
  }

  async show(request, response){

    const { id } = request.params;
    if(!id){
      return response.status(404).json({ error: "Id is requered" });
    }

    const product = await ProductsRepository.findById(id);
    if(!product){
      return response.status(404).json({ error: "Product not found"});
    }

    response.status(200).json(product);
  }

  async store(request, response){

    const { name, price } = request.body;
    const productExist = await ProductsRepository.findByName(name);

    if(productExist){
      return response.status(405).json({error: "This product is already registered"});
    }

    await ProductsRepository.create(name, price);
    response.status(201).send("Registered product");
  }

  async update(request, response){

    const { id } = request.params;
    const { name, price } = request.body;
    const productExist = await ProductsRepository.findById(id);

    if(!productExist){
      return response.status(400).json({error: "Product not found"});
    }

    await ProductsRepository.update(name, price);
    response.status(200).send("Updated product");
  }

  async delete(request, response){

    const { id } = request.params;
    const products = await ProductsRepository.delete(id);

    response.status(200).json(products);
  }

};

export default new ProductsController;
