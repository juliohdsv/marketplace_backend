const isValid = (request, response, next) =>{

  const { name, price } = request.body;

  if(!name || !price){
    return response.status(404).json({ error: "name and price are requered" });
  }

  next();
};


export default isValid;
