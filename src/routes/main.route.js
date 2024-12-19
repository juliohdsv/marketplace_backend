import { Router } from "express";

import isValid from "../middlewares/isValid.middleware.js";
import ProductsController from "../app/controllers/ProductsController.js";

const route = Router();

route.get("/products", ProductsController.index);
route.get("/products/:id", ProductsController.show);
route.put("/products/:id", ProductsController.update);
route.delete("/products/:id", ProductsController.delete);
route.post("/products", isValid, ProductsController.store);

export default route;
